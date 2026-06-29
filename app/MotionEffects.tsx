"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.querySelector<HTMLElement>(".site-header");

    function updateHeader() {
      if (!header) return;
      header.classList.toggle("is-compact", window.scrollY > 80);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (reduceMotion) {
      return () => window.removeEventListener("scroll", updateHeader);
    }

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const lenis = new Lenis({
      duration: isMobile ? 0.85 : 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      gsap.from(".site-header .logo", {
        y: -16,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
      });

      gsap.from(".desktop-nav a", {
        y: -12,
        opacity: 0,
        duration: 0.65,
        stagger: 0.06,
        delay: 0.12,
        ease: "power3.out",
      });

      gsap.from(".header-cta", {
        x: 18,
        opacity: 0,
        duration: 0.7,
        delay: 0.34,
        ease: "power3.out",
      });

      gsap.from(".hero-kicker, .hero-side h2, .hero-side p", {
        y: 26,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-title-line", {
        y: 34,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.9,
        stagger: 0.12,
        delay: 0.18,
        ease: "power3.out",
      });

      gsap.from(".hero-lead", {
        y: 22,
        opacity: 0,
        duration: 0.75,
        delay: 0.62,
        ease: "power3.out",
      });

      gsap.from(".hero-media", {
        y: 44,
        scale: 1.04,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.to(".hero-media img", {
        y: -70,
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='fade-up']").forEach((element) => {
        gsap.from(element, {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='fade-left']").forEach((element) => {
        gsap.from(element, {
          x: -28,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='fade-right']").forEach((element) => {
        gsap.from(element, {
          x: 34,
          y: 18,
          scale: 0.96,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");
        if (!items.length) return;

        gsap.from(items, {
          y: 42,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 82%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".parallax-media img").forEach((image) => {
        gsap.to(image, {
          yPercent: -8,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: image.closest(".parallax-media") ?? image,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.15,
          },
        });
      });

      gsap.from(".featured-card .featured-label", {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-card",
          start: "top 82%",
          once: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".process-row").forEach((row, index) => {
        gsap.from(row, {
          x: 24,
          opacity: 0.35,
          duration: 0.65,
          delay: index * 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            once: true,
          },
        });
      });

      gsap.from(".process-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-card",
          start: "top 82%",
          once: true,
        },
      });

      gsap.to(".work-browser-image img", {
        y: -28,
        ease: "none",
        scrollTrigger: {
          trigger: ".work-browser",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("scroll", updateHeader);
      context.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
