"use client";

import { useEffect, useState } from "react";

const menuLinks = [
  { label: "Työt", href: "/#tyot" },
  { label: "Palvelut", href: "/#palvelut" },
  { label: "Meistä", href: "/#miksi" },
  { label: "Hinnat", href: "/#hinnat" },
  { label: "UKK", href: "/#ukk" },
  { label: "Yhteystiedot", href: "/#yhteys" },
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
          Varaa puhelu
        </a>
      </nav>
    </div>
  );
}
