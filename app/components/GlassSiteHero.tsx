"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Apple-style product hero: a premium website rendered on a chrome-framed
 * glass slab, floating in a softly lit studio. Calm slow rotation, mouse
 * parallax, and a gentle scroll reveal. The product is the hero.
 */

// --- draw a clean, premium light website onto a canvas (the "screen") ---
function makeSiteTexture(): THREE.CanvasTexture {
  const w = 1100, h = 700;
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const x = c.getContext("2d")!;

  // page bg
  x.fillStyle = "#f5f6fa"; x.fillRect(0, 0, w, h);

  // top nav
  x.fillStyle = "#ffffff"; x.fillRect(0, 0, w, 70);
  x.fillStyle = "#0a0e1a"; x.beginPath(); x.roundRect(48, 26, 70, 18, 4); x.fill();
  x.fillStyle = "#c7ccd6";
  for (let i = 0; i < 3; i++) { x.beginPath(); x.roundRect(w - 380 + i * 90, 31, 56, 8, 4); x.fill(); }
  x.fillStyle = "#6ad9e5"; x.beginPath(); x.roundRect(w - 130, 22, 82, 26, 13); x.fill();

  // hero left
  x.fillStyle = "#6ad9e5"; x.beginPath(); x.roundRect(48, 150, 90, 10, 5); x.fill();
  x.fillStyle = "#0a0e1a";
  x.beginPath(); x.roundRect(48, 184, 460, 36, 6); x.fill();
  x.beginPath(); x.roundRect(48, 232, 360, 36, 6); x.fill();
  x.fillStyle = "#9aa1b0";
  x.beginPath(); x.roundRect(48, 298, 420, 11, 5); x.fill();
  x.beginPath(); x.roundRect(48, 320, 360, 11, 5); x.fill();
  x.fillStyle = "#0a0e1a"; x.beginPath(); x.roundRect(48, 360, 150, 44, 22); x.fill();
  x.fillStyle = "#ffffff"; x.beginPath(); x.roundRect(218, 360, 120, 44, 22); x.fill();
  x.strokeStyle = "#d4d8e0"; x.lineWidth = 2; x.beginPath(); x.roundRect(218, 360, 120, 44, 22); x.stroke();

  // hero right image
  const grad = x.createLinearGradient(560, 150, 1052, 470);
  grad.addColorStop(0, "#1a2530"); grad.addColorStop(1, "#0a141f");
  x.fillStyle = grad; x.beginPath(); x.roundRect(560, 150, 492, 320, 14); x.fill();
  const gl = x.createRadialGradient(900, 220, 10, 900, 220, 260);
  gl.addColorStop(0, "rgba(106,217,229,0.35)"); gl.addColorStop(1, "rgba(106,217,229,0)");
  x.fillStyle = gl; x.beginPath(); x.roundRect(560, 150, 492, 320, 14); x.fill();

  // three cards
  for (let i = 0; i < 3; i++) {
    const cx = 48 + i * 340;
    x.fillStyle = "#ffffff"; x.beginPath(); x.roundRect(cx, 520, 308, 132, 12); x.fill();
    x.fillStyle = "#6ad9e5"; x.beginPath(); x.roundRect(cx + 22, 546, 30, 8, 4); x.fill();
    x.fillStyle = "#0a0e1a"; x.beginPath(); x.roundRect(cx + 22, 566, 150, 13, 4); x.fill();
    x.fillStyle = "#c7ccd6";
    x.beginPath(); x.roundRect(cx + 22, 592, 250, 8, 4); x.fill();
    x.beginPath(); x.roundRect(cx + 22, 608, 210, 8, 4); x.fill();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// equirectangular studio gradient → reflections on the chrome frame
function makeEnvTexture(): THREE.CanvasTexture {
  const w = 1024, h = 512;
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const x = c.getContext("2d")!;
  const g = x.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "#0a1622"); g.addColorStop(0.5, "#04080f"); g.addColorStop(1, "#020509");
  x.fillStyle = g; x.fillRect(0, 0, w, h);
  // soft light bands the chrome will catch
  const band = (cx: number, cy: number, r: number, a: number, col: string) => {
    const rg = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    rg.addColorStop(0, col.replace("A", String(a)));
    rg.addColorStop(1, col.replace("A", "0"));
    x.fillStyle = rg; x.fillRect(0, 0, w, h);
  };
  band(w * 0.25, h * 0.22, 300, 0.5, "rgba(160,235,245,A)");
  band(w * 0.75, h * 0.3, 260, 0.35, "rgba(120,200,230,A)");
  band(w * 0.55, h * 0.75, 320, 0.18, "rgba(106,217,229,A)");
  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function roundedRectShape(w: number, h: number, r: number): THREE.Shape {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.absarc(x + w - r, y + r, r, -Math.PI / 2, 0, false);
  s.lineTo(x + w, y + h - r);
  s.absarc(x + w - r, y + h - r, r, 0, Math.PI / 2, false);
  s.lineTo(x + r, y + h);
  s.absarc(x + r, y + h - r, r, Math.PI / 2, Math.PI, false);
  s.lineTo(x, y + r);
  s.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5, false);
  return s;
}

export default function GlassSiteHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    cam.position.set(0, 0, 5);

    function resize() {
      if (!canvas) return;
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      cam.aspect = canvas.clientWidth / canvas.clientHeight;
      cam.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    // environment for reflections
    const envTex = makeEnvTexture();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromEquirectangular(envTex);
    scene.environment = envRT.texture;

    // lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(-3, 4, 4); scene.add(key);
    const rim = new THREE.PointLight(0x6ad9e5, 18, 18); rim.position.set(3.5, -1, 2.5); scene.add(rim);

    // the slab group (chrome bezel + screen)
    const slab = new THREE.Group();
    slab.position.set(0.55, 0, 0);
    scene.add(slab);

    const W = 2.5, H = 1.6, R = 0.14;
    const bezelGeo = new THREE.ExtrudeGeometry(roundedRectShape(W, H, R), {
      depth: 0.1, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 4, curveSegments: 24,
    });
    bezelGeo.center();
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x0b1420, metalness: 1.0, roughness: 0.22, envMapIntensity: 1.4,
    });
    const bezel = new THREE.Mesh(bezelGeo, bezelMat);
    slab.add(bezel);

    // screen face
    const siteTex = makeSiteTexture();
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(W - 0.16, H - 0.16),
      new THREE.MeshBasicMaterial({ map: siteTex, toneMapped: false })
    );
    screen.position.z = 0.082;
    slab.add(screen);

    // glass glare sweep over the screen
    const glareCanvas = document.createElement("canvas");
    glareCanvas.width = 256; glareCanvas.height = 256;
    const gx = glareCanvas.getContext("2d")!;
    const gg = gx.createLinearGradient(0, 0, 256, 256);
    gg.addColorStop(0, "rgba(255,255,255,0)");
    gg.addColorStop(0.45, "rgba(255,255,255,0.10)");
    gg.addColorStop(0.5, "rgba(255,255,255,0.22)");
    gg.addColorStop(0.55, "rgba(255,255,255,0.10)");
    gg.addColorStop(1, "rgba(255,255,255,0)");
    gx.fillStyle = gg; gx.fillRect(0, 0, 256, 256);
    const glareTex = new THREE.CanvasTexture(glareCanvas);
    const glare = new THREE.Mesh(
      new THREE.PlaneGeometry(W - 0.16, H - 0.16),
      new THREE.MeshBasicMaterial({ map: glareTex, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
    );
    glare.position.z = 0.084;
    slab.add(glare);

    // contact glow beneath
    const glowCanvas = document.createElement("canvas");
    glowCanvas.width = 256; glowCanvas.height = 256;
    const cgx = glowCanvas.getContext("2d")!;
    const rg = cgx.createRadialGradient(128, 128, 0, 128, 128, 128);
    rg.addColorStop(0, "rgba(106,217,229,0.5)"); rg.addColorStop(1, "rgba(106,217,229,0)");
    cgx.fillStyle = rg; cgx.fillRect(0, 0, 256, 256);
    const glowSprite = new THREE.Mesh(
      new THREE.PlaneGeometry(4, 1.6),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(glowCanvas), transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    glowSprite.position.set(0.55, -1.25, -0.6);
    scene.add(glowSprite);

    let mx = 0, my = 0, t = 0, scrollP = 0, frame = 0, stopped = false;
    function onMove(e: MouseEvent) {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 2 - 1;
      my = -((e.clientY - r.top) / r.height) * 2 + 1;
    }
    canvas.addEventListener("mousemove", onMove);

    function onScroll() {
      const vh = window.innerHeight;
      scrollP = Math.min(1, Math.max(0, window.scrollY / vh));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function render() {
      // calm float + slow oscillating rotation, start at a slight 3/4 angle
      const baseRotY = 0.42 - scrollP * 0.42; // settles face-on as you scroll in
      slab.rotation.y += (baseRotY + mx * 0.22 + Math.sin(t * 0.25) * 0.05 - slab.rotation.y) * 0.05;
      slab.rotation.x += (-0.04 + my * 0.14 + Math.sin(t * 0.2) * 0.03 - slab.rotation.x) * 0.05;
      slab.position.y = Math.sin(t * 0.5) * 0.05;
      const scl = 1 + scrollP * 0.06;
      slab.scale.setScalar(scl);

      // glare drifts across the glass
      glare.position.x = Math.sin(t * 0.3) * 0.5;

      cam.position.x += (mx * 0.12 - cam.position.x) * 0.04;
      cam.position.y += (my * 0.08 - cam.position.y) * 0.04;
      cam.lookAt(0.3, 0, 0);
      renderer.render(scene, cam);
    }

    if (reduced) {
      slab.rotation.set(-0.04, 0.3, 0);
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
      window.removeEventListener("scroll", onScroll);
      canvas.removeEventListener("mousemove", onMove);
      bezelGeo.dispose(); bezelMat.dispose();
      screen.geometry.dispose(); (screen.material as THREE.Material).dispose();
      glare.geometry.dispose(); (glare.material as THREE.Material).dispose();
      siteTex.dispose(); glareTex.dispose(); envTex.dispose();
      envRT.texture.dispose(); pmrem.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" aria-hidden="true" role="presentation" />;
}
