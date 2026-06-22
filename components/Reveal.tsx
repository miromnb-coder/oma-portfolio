"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export default function Reveal({ children, className = "", delay = 0, y = 42, once = true }: RevealProps) {
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
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.05,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            toggleActions: once ? "play none none none" : "play reverse play reverse"
          }
        }
      );
    }, element);

    return () => context.revert();
  }, [delay, once, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
