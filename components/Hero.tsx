"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, Diamond, Smartphone, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroProof, site, socialLinks } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

const proofIcons = [Zap, Smartphone, Diamond, CheckCircle2];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const proofRef = useRef<HTMLDivElement | null>(null);
  const socialsRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const surfaceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const eyebrow = eyebrowRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const actions = actionsRef.current;
    const proof = proofRef.current;
    const socials = socialsRef.current;
    const scroll = scrollRef.current;
    const surface = surfaceRef.current;

    if (!section || !line || !eyebrow || !title || !subtitle || !actions || !proof || !socials || !scroll || !surface) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const actionItems = Array.from(actions.children);
    const proofItems = Array.from(proof.children);
    const socialItems = Array.from(socials.children);

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

      intro
        .fromTo(line, { scaleX: 0, autoAlpha: 0 }, { scaleX: 1, autoAlpha: 1, duration: 0.8, transformOrigin: "center" }, 0.12)
        .fromTo(eyebrow, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, 0.22)
        .fromTo(title, { y: 32, autoAlpha: 0, scale: 0.965 }, { y: 0, autoAlpha: 1, scale: 1, duration: 1.18 }, 0.38)
        .fromTo(subtitle, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.86 }, 0.66)
        .fromTo(actionItems, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.74, stagger: 0.08 }, 0.82)
        .fromTo(proofItems, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.72, stagger: 0.07 }, 0.98)
        .fromTo(socialItems, { x: -12, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08 }, 0.95)
        .fromTo(scroll, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.72 }, 1.14);

      gsap.to(title, {
        y: -92,
        autoAlpha: 0.25,
        scale: 0.985,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1.15 }
      });

      gsap.to(surface, {
        y: 86,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1.1 }
      });

      gsap.to(scroll, {
        autoAlpha: 0,
        y: 24,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "35% top", scrub: 0.75 }
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="etusivu" className="section hero-section">
      <div ref={surfaceRef} className="hero-surface" aria-hidden="true" />

      <div ref={socialsRef} className="hero-socials" aria-label="Sosiaalinen media">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} aria-label={link.label}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="hero-content">
        <div ref={lineRef} className="hero-line" />
        <p ref={eyebrowRef} className="eyebrow">{site.tagline}</p>

        <h1 ref={titleRef} className="hero-title">{site.headline}</h1>

        <div ref={subtitleRef}>
          <p className="hero-subtitle">{site.subtitle}</p>
          <p className="hero-copy">{site.supportingText}</p>
        </div>

        <div ref={actionsRef} className="hero-actions">
          <a className="premium-button premium-button--light" href="#yhteys">{site.primaryCta} ↗</a>
          <a className="premium-button" href="#tyot">{site.secondaryCta} ↗</a>
        </div>

        <div ref={proofRef} className="hero-proof" aria-label="NODRA vahvuudet">
          {heroProof.map((item, index) => {
            const Icon = proofIcons[index];
            return (
              <span key={item}>
                <Icon size={16} strokeWidth={1.5} />
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div ref={scrollRef} className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <span />
      </div>
    </section>
  );
}
