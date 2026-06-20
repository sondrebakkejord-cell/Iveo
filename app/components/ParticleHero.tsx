"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ACCENT = 0x6ad9e5;

const RECTS = [
  { x: 0, y: 0.85, w: 2.6, h: 0.14, weight: 0.6 },
  { x: -0.6, y: 0.3, w: 1.3, h: 0.55, weight: 1.2 },
  { x: 0.75, y: 0.3, w: 0.9, h: 0.55, weight: 1.0 },
  { x: -0.95, y: -0.45, w: 0.7, h: 0.5, weight: 0.7 },
  { x: 0, y: -0.45, w: 0.7, h: 0.5, weight: 0.7 },
  { x: 0.95, y: -0.45, w: 0.7, h: 0.5, weight: 0.7 },
];
const FRAME = { w: 2.9, h: 2.1 };

function targetPoint(): [number, number, number] {
  const zDepth = 0.18;
  if (Math.random() < 0.35) {
    const peri = 2 * (FRAME.w + FRAME.h);
    let d = Math.random() * peri;
    let px: number, py: number;
    if (d < FRAME.w) { px = -FRAME.w / 2 + d; py = -FRAME.h / 2; }
    else if (d < FRAME.w + FRAME.h) { px = FRAME.w / 2; py = -FRAME.h / 2 + (d - FRAME.w); }
    else if (d < 2 * FRAME.w + FRAME.h) { px = FRAME.w / 2 - (d - FRAME.w - FRAME.h); py = FRAME.h / 2; }
    else { px = -FRAME.w / 2; py = FRAME.h / 2 - (d - 2 * FRAME.w - FRAME.h); }
    return [px, py, (Math.random() - 0.5) * zDepth];
  }
  const totalW = RECTS.reduce((s, r) => s + r.weight, 0);
  let pick = Math.random() * totalW;
  let rt = RECTS[0];
  for (const r of RECTS) { if (pick < r.weight) { rt = r; break; } pick -= r.weight; }
  if (Math.random() < 0.7) {
    const peri = 2 * (rt.w + rt.h);
    let d = Math.random() * peri;
    let px: number, py: number;
    if (d < rt.w) { px = -rt.w / 2 + d; py = -rt.h / 2; }
    else if (d < rt.w + rt.h) { px = rt.w / 2; py = -rt.h / 2 + (d - rt.w); }
    else if (d < 2 * rt.w + rt.h) { px = rt.w / 2 - (d - rt.w - rt.h); py = rt.h / 2; }
    else { px = -rt.w / 2; py = rt.h / 2 - (d - 2 * rt.w - rt.h); }
    return [rt.x + px, rt.y + py, (Math.random() - 0.5) * zDepth];
  }
  return [
    rt.x + (Math.random() - 0.5) * rt.w * 0.95,
    rt.y + (Math.random() - 0.5) * rt.h * 0.95,
    (Math.random() - 0.5) * zDepth,
  ];
}

export default function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    cam.position.set(0, 0, 5);

    function resize() {
      if (!canvas) return;
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      cam.aspect = canvas.clientWidth / canvas.clientHeight;
      cam.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    // starfield
    {
      const N = 300;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 12;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
        pos[i * 3 + 2] = -3 - Math.random() * 7;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      scene.add(new THREE.Points(g, new THREE.PointsMaterial({ size: 0.01, color: 0x9fd8e3, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending })));
    }

    const formGroup = new THREE.Group();
    formGroup.position.set(0.7, -0.05, 0);
    formGroup.scale.set(0.9, 0.9, 0.9);
    scene.add(formGroup);
    const swayGroup = new THREE.Group();
    formGroup.add(swayGroup);

    const N = 6500;
    const positions = new Float32Array(N * 3);
    const targets = new Float32Array(N * 3);
    const origins = new Float32Array(N * 3);
    const delays = new Float32Array(N);
    const offsets = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const t = targetPoint();
      targets[i * 3] = t[0]; targets[i * 3 + 1] = t[1]; targets[i * 3 + 2] = t[2];
      const ang = Math.random() * Math.PI * 2;
      const rad = 1 + Math.random() * 2.5;
      origins[i * 3] = -2.5 + Math.cos(ang) * 0.3 + (Math.random() - 0.5) * 0.5;
      origins[i * 3 + 1] = Math.sin(ang) * rad * 0.6;
      origins[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
      positions[i * 3] = origins[i * 3];
      positions[i * 3 + 1] = origins[i * 3 + 1];
      positions[i * 3 + 2] = origins[i * 3 + 2];
      delays[i] = (1 - (t[1] + 1) / 2) * 1.5 + Math.random() * 0.4;
      offsets[i] = Math.random() * Math.PI * 2;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({ size: 0.014, color: ACCENT, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
    swayGroup.add(new THREE.Points(geom, pointsMat));

    const WAVE_LINES = 42, PTS_PER_LINE = 80;
    const waveLines: Array<{ geom: THREE.BufferGeometry; baseY: number; phase: number; speed: number }> = [];
    for (let i = 0; i < WAVE_LINES; i++) {
      const pos = new Float32Array(PTS_PER_LINE * 3);
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.08 + Math.random() * 0.18, blending: THREE.AdditiveBlending });
      formGroup.add(new THREE.Line(g, mat));
      waveLines.push({ geom: g, baseY: -1 + (i / WAVE_LINES) * 2, phase: Math.random() * Math.PI * 2, speed: 0.4 + Math.random() * 0.3 });
    }

    const DUST = 500;
    const dustPos = new Float32Array(DUST * 3);
    for (let i = 0; i < DUST; i++) {
      dustPos[i * 3] = -2.5 + Math.random() * 4;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 2.4;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
    }
    const dustG = new THREE.BufferGeometry();
    dustG.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    formGroup.add(new THREE.Points(dustG, new THREE.PointsMaterial({ size: 0.008, color: ACCENT, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false })));

    let mx = 0, my = 0, t = 0;
    function onMove(e: MouseEvent) {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 2 - 1;
      my = -((e.clientY - r.top) / r.height) * 2 + 1;
    }
    canvas.addEventListener("mousemove", onMove);

    const REVEAL = 3.0;
    let frame = 0;
    let stopped = false;

    if (reduced) {
      // Render once in formed state, skip animation loop
      t = REVEAL + 2;
      const pa = geom.attributes.position.array as Float32Array;
      for (let i = 0; i < N; i++) {
        pa[i * 3] = targets[i * 3];
        pa[i * 3 + 1] = targets[i * 3 + 1];
        pa[i * 3 + 2] = targets[i * 3 + 2];
      }
      geom.attributes.position.needsUpdate = true;
      renderer.render(scene, cam);
      return () => {
        window.removeEventListener("resize", resize);
        canvas.removeEventListener("mousemove", onMove);
        renderer.dispose();
        geom.dispose();
        pointsMat.dispose();
        dustG.dispose();
        waveLines.forEach((wl) => wl.geom.dispose());
      };
    }

    function loop() {
      if (stopped) return;
      t += 0.016;
      const pa = geom.attributes.position.array as Float32Array;
      if (t < REVEAL) {
        for (let i = 0; i < N; i++) {
          const tx = targets[i * 3], ty = targets[i * 3 + 1], tz = targets[i * 3 + 2];
          const ox = origins[i * 3], oy = origins[i * 3 + 1], oz = origins[i * 3 + 2];
          const local = Math.max(0, t - delays[i]);
          const k = Math.min(1, local / 1.5);
          const ease = 1 - Math.pow(1 - k, 3);
          pa[i * 3] = ox + (tx - ox) * ease;
          pa[i * 3 + 1] = oy + (ty - oy) * ease;
          pa[i * 3 + 2] = oz + (tz - oz) * ease;
        }
      } else {
        for (let i = 0; i < N; i++) {
          const tx = targets[i * 3], ty = targets[i * 3 + 1], tz = targets[i * 3 + 2];
          const off = offsets[i];
          const wob = Math.sin(t * 1.2 + off) * 0.01;
          pa[i * 3] = tx + Math.cos(off) * wob;
          pa[i * 3 + 1] = ty + Math.sin(off * 1.3) * wob;
          pa[i * 3 + 2] = tz + Math.sin(off * 0.7 + t) * 0.015;
        }
      }
      geom.attributes.position.needsUpdate = true;

      const swayStart = REVEAL - 0.5;
      const ramp = Math.max(0, Math.min(1, (t - swayStart) / 1.5));
      swayGroup.rotation.y = Math.sin((t - swayStart) * 0.35) * 0.45 * ramp;
      swayGroup.rotation.x = Math.sin((t - swayStart) * 0.25) * 0.08 * ramp;

      waveLines.forEach((wl) => {
        const arr = wl.geom.attributes.position.array as Float32Array;
        for (let i = 0; i < PTS_PER_LINE; i++) {
          const u = i / (PTS_PER_LINE - 1);
          const x = -2.5 + u * 2.3;
          const env = 1 - u * 0.95;
          const y = wl.baseY + Math.sin(u * 8 + t * wl.speed + wl.phase) * 0.08 * env + Math.sin(u * 16 + t * wl.speed * 0.7) * 0.03 * env;
          const z = Math.cos(u * 5 + t * 0.5 + wl.phase) * 0.04 * env;
          arr[i * 3] = x; arr[i * 3 + 1] = y; arr[i * 3 + 2] = z;
        }
        wl.geom.attributes.position.needsUpdate = true;
      });

      const da = dustG.attributes.position.array as Float32Array;
      for (let i = 0; i < DUST; i++) {
        da[i * 3] += 0.002;
        if (da[i * 3] > 1.5) { da[i * 3] = -2.5; da[i * 3 + 1] = (Math.random() - 0.5) * 2.4; }
      }
      dustG.attributes.position.needsUpdate = true;

      formGroup.rotation.y += (mx * 0.1 - formGroup.rotation.y) * 0.04;
      formGroup.rotation.x += (my * 0.06 - formGroup.rotation.x) * 0.04;
      cam.position.x = Math.sin(t * 0.3) * 0.15 + mx * 0.18;
      cam.position.y = Math.sin(t * 0.22) * 0.08 + my * 0.1;
      cam.position.z = 5 + Math.cos(t * 0.25) * 0.12;
      cam.lookAt(formGroup.position.x * 0.4, formGroup.position.y * 0.4, 0);

      renderer.render(scene, cam);
      frame = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      renderer.dispose();
      geom.dispose();
      pointsMat.dispose();
      dustG.dispose();
      waveLines.forEach((wl) => wl.geom.dispose());
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" aria-hidden="true" role="presentation" />;
}
