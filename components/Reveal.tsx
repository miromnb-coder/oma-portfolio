"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  start?: string;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 1.05,
  y = 42,
  x = 0,
  scale = 1,
  once = true,
  start = "top 86%"
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      element.style.opacity = "1";
      element.style.transform = "none";
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, x, y, scale, willChange: "transform, opacity" },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "power4.out",
          clearProps: "willChange",
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: once ? "play none none none" : "play reverse play reverse"
          }
        }
      );
    }, element);

    return () => context.revert();
  }, [delay, duration, once, scale, start, x, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
