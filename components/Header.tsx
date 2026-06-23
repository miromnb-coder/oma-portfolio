"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MobileMenu from "@/components/MobileMenu";
import { navItems, site } from "@/lib/site-data";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".nav-shell",
        { autoAlpha: 0, y: -18 },
        { autoAlpha: 1, y: 0, duration: 0.9, delay: 0.08, ease: "power3.out" }
      );
    }, header);

    return () => context.revert();
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <div className="nav-shell">
        <a className="logo" href="#etusivu" aria-label="NODRA etusivulle">
          {site.name}
        </a>

        <nav className="desktop-nav" aria-label="Päävalikko">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="premium-button nav-cta" href="#yhteys">
            {site.primaryCta}
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
