"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: window.innerWidth < 768 ? 0.78 : 1.12,
      smoothWheel: true,
      wheelMultiplier: 0.86,
      touchMultiplier: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
