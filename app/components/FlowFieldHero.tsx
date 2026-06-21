"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Cinematic hero: ~16k particles advected by curl-noise on the GPU,
 * forming a slowly swirling orb of cyan smoke. Camera + mouse parallax.
 * Honours prefers-reduced-motion (renders one static frame).
 */

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uReduced;
  varying float vMix;
  varying float vEdge;

  // --- Ashima simplex noise 3D ---
  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  vec3 snoiseVec3(vec3 x){
    return vec3(
      snoise(x),
      snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2)),
      snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4))
    );
  }
  vec3 curl(vec3 p){
    const float e = 0.18;
    vec3 dx = vec3(e,0.,0.), dy = vec3(0.,e,0.), dz = vec3(0.,0.,e);
    vec3 px0 = snoiseVec3(p-dx), px1 = snoiseVec3(p+dx);
    vec3 py0 = snoiseVec3(p-dy), py1 = snoiseVec3(p+dy);
    vec3 pz0 = snoiseVec3(p-dz), pz1 = snoiseVec3(p+dz);
    float x = py1.z - py0.z - pz1.y + pz0.y;
    float y = pz1.x - pz0.x - px1.z + px0.z;
    float z = px1.y - px0.y - py1.x + py0.x;
    return normalize(vec3(x,y,z) / (2.0*e));
  }

  void main(){
    float t = (uReduced > 0.5) ? 1.5 : uTime;
    vec3 base = position;
    vec3 flow = curl(base * 0.85 + vec3(0.0, 0.0, t * 0.05));
    float amp = 0.6;
    vec3 p = base + flow * amp;
    p *= 1.0 + 0.04 * sin(t * 0.5);
    p.x += 0.65;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    vMix  = clamp(length(flow), 0.0, 1.0);
    vEdge = smoothstep(2.0, 0.15, length(p - vec3(0.65, 0.0, 0.0)));
    gl_PointSize = (2.95 * uPixelRatio) * (3.0 / -mv.z);
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;
  varying float vMix;
  varying float vEdge;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float soft = smoothstep(0.5, 0.0, d);
    vec3 cyan  = vec3(0.416, 0.851, 0.898);
    vec3 white = vec3(0.88, 0.97, 1.0);
    vec3 col = mix(cyan, white, vMix * 0.65);
    float a = soft * vEdge * 0.95;
    gl_FragColor = vec4(col, a);
  }
`;

export default function FlowFieldHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const pr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pr);
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    cam.position.set(0, 0, 4.4);

    function resize() {
      if (!canvas) return;
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      cam.aspect = canvas.clientWidth / canvas.clientHeight;
      cam.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    // ---- soft glow disc behind the orb ----
    const glow = new THREE.Mesh(
      new THREE.CircleGeometry(2.6, 48),
      new THREE.MeshBasicMaterial({ color: 0x6ad9e5, transparent: true, opacity: 0.09, blending: THREE.AdditiveBlending })
    );
    glow.position.set(0.65, 0, -1.5);
    scene.add(glow);

    const core = new THREE.Mesh(
      new THREE.CircleGeometry(1.1, 48),
      new THREE.MeshBasicMaterial({ color: 0xaff2f8, transparent: true, opacity: 0.10, blending: THREE.AdditiveBlending })
    );
    core.position.set(0.65, 0, -1.2);
    scene.add(core);

    // ---- sparse dust ----
    {
      const N = 260;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 12;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
        pos[i * 3 + 2] = -2 - Math.random() * 6;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      scene.add(new THREE.Points(g, new THREE.PointsMaterial({ size: 0.012, color: 0x9fd8e3, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending })));
    }

    // ---- the orb: points distributed in a spherical shell ----
    const N = reduced ? 6000 : 16000;
    const positions = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      // even-ish spherical distribution with shell thickness
      const u = Math.random(), v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1.25 + (Math.random() - 0.5) * 0.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const uniforms = {
      uTime: { value: 0 },
      uPixelRatio: { value: pr },
      uReduced: { value: reduced ? 1 : 0 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const orb = new THREE.Points(geom, mat);
    const group = new THREE.Group();
    group.add(orb);
    scene.add(group);

    let mx = 0, my = 0, t = 0, frame = 0, stopped = false;
    function onMove(e: MouseEvent) {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 2 - 1;
      my = -((e.clientY - r.top) / r.height) * 2 + 1;
    }
    canvas.addEventListener("mousemove", onMove);

    function render() {
      uniforms.uTime.value = t;
      group.rotation.y += (mx * 0.3 - group.rotation.y) * 0.04 + 0.0015;
      group.rotation.x += (my * 0.2 - group.rotation.x) * 0.04;
      cam.position.x = Math.sin(t * 0.18) * 0.12 + mx * 0.15;
      cam.position.y = Math.sin(t * 0.14) * 0.07 + my * 0.1;
      cam.lookAt(0.3, 0, 0);
      renderer.render(scene, cam);
    }

    if (reduced) {
      render();
    } else {
      const loop = () => {
        if (stopped) return;
        t += 0.016;
        render();
        frame = requestAnimationFrame(loop);
      };
      loop();
    }

    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      renderer.dispose();
      geom.dispose();
      mat.dispose();
      glow.geometry.dispose();
      (glow.material as THREE.Material).dispose();
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" aria-hidden="true" role="presentation" />;
}
