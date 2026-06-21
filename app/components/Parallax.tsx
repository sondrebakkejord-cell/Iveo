"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type ParallaxProps = {
  children: ReactNode;
  /**
   * Drift speed. Positive = moves slower than scroll (recedes, depth back);
   * negative = moves faster (comes forward). Typical range -0.3 … 0.3.
   */
  speed?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
};

// One shared rAF loop drives every Parallax element on the page.
type Item = { el: HTMLElement; speed: number };
const items = new Set<Item>();
let running = false;
let ticking = false;

function update() {
  ticking = false;
  const vh = window.innerHeight;
  for (const it of items) {
    const rect = it.el.getBoundingClientRect();
    // progress: -1 (just below viewport) → 1 (just above), 0 at center
    const center = rect.top + rect.height / 2;
    const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
    const shift = progress * it.speed * 100;
    it.el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
  }
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

function ensureRunning() {
  if (running) return;
  running = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
}

export default function Parallax({
  children,
  speed = 0.15,
  as: Tag = "div",
  className,
  style,
}: ParallaxProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const item: Item = { el, speed };
    items.add(item);
    ensureRunning();
    update();
    return () => {
      items.delete(item);
      el.style.transform = "";
    };
  }, [speed]);

  return (
    <Tag ref={ref} className={className} style={{ ...style, willChange: "transform" }}>
      {children}
    </Tag>
  );
}
