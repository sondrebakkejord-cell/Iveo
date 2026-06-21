"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger / entrance delay in ms */
  delay?: number;
  /** Travel distance in px before settling */
  y?: number;
  /** Direction of travel */
  from?: "up" | "down" | "left" | "right";
  /** Render element */
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  /** Trigger once (default) or every time it enters */
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  from = "up",
  as: Tag = "div",
  className,
  style,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const axis = from === "left" || from === "right" ? "X" : "Y";
  const sign = from === "down" || from === "right" ? -1 : 1;
  const offset = shown ? 0 : sign * y;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: `translate${axis}(${offset}px)`,
        transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
