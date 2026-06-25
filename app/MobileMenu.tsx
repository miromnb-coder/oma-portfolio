"use client";

import { useEffect, useState } from "react";

const menuLinks = [
  { label: "Palvelut", href: "/#palvelut" },
  { label: "Miksi NODRA", href: "/#miksi" },
  { label: "Minusta", href: "/#minusta" },
  { label: "Hinnat", href: "/#hinnat" },
  { label: "UKK", href: "/#ukk" },
  { label: "Yhteys", href: "/#yhteys" },
  { label: "Tietosuoja", href: "/tietosuojaseloste" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className="mobile-menu-wrapper">
      <button
        className={`menu-button${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "Sulje valikko" : "Avaa valikko"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`mobile-menu-backdrop${isOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <nav id="mobile-menu" className={`mobile-menu-panel${isOpen ? " is-open" : ""}`} aria-label="Mobiilivalikko">
        {menuLinks.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="mobile-menu-cta" href="/#yhteys" onClick={() => setIsOpen(false)}>
          Pyydä tarjous
        </a>
      </nav>

      <style jsx>{`
        .mobile-menu-wrapper {
          display: none;
          justify-self: end;
        }

        .mobile-menu-backdrop {
          position: fixed;
          inset: 0;
          z-index: 40;
          background: rgba(23, 25, 29, 0.2);
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms ease;
        }

        .mobile-menu-backdrop.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-panel {
          position: fixed;
          top: 92px;
          left: 20px;
          right: 20px;
          z-index: 50;
          display: grid;
          gap: 8px;
          padding: 16px;
          border: 1px solid #e8ded6;
          border-radius: 18px;
          background: rgba(255, 253, 249, 0.98);
          box-shadow: 0 24px 60px rgba(23, 25, 29, 0.16);
          opacity: 0;
          transform: translateY(-10px) scale(0.98);
          pointer-events: none;
          transition: opacity 180ms ease, transform 180ms ease;
        }

        .mobile-menu-panel.is-open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .mobile-menu-panel a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 46px;
          padding: 0 14px;
          border-radius: 10px;
          color: #17191d;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
        }

        .mobile-menu-panel a:hover {
          background: #f2e4e1;
          color: #611820;
        }

        .mobile-menu-panel a::after {
          content: "→";
          color: #611820;
        }

        .mobile-menu-panel .mobile-menu-cta {
          margin-top: 6px;
          justify-content: center;
          background: #611820;
          color: white;
        }

        .mobile-menu-panel .mobile-menu-cta::after {
          display: none;
        }

        :global(.menu-button.is-open span:nth-child(1)) {
          transform: translateY(8px) rotate(45deg);
        }

        :global(.menu-button.is-open span:nth-child(2)) {
          opacity: 0;
        }

        :global(.menu-button.is-open span:nth-child(3)) {
          transform: translateY(-8px) rotate(-45deg);
        }

        :global(.menu-button span) {
          transition: transform 180ms ease, opacity 180ms ease;
        }

        @media (max-width: 900px) {
          .mobile-menu-wrapper {
            display: block;
          }
        }

        @media (max-width: 420px) {
          .mobile-menu-panel {
            top: 84px;
            left: 16px;
            right: 16px;
          }
        }
      `}</style>
    </div>
  );
}
