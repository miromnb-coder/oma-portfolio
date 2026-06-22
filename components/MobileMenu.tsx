"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/site-data";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label="Avaa valikko"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu size={20} strokeWidth={1.6} />
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={close}
            />
            <motion.div
              className="mobile-menu-panel"
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-menu-top">
                <a className="logo" href="#etusivu" onClick={close}>
                  {site.name}
                </a>
                <button className="mobile-menu-button" type="button" aria-label="Sulje valikko" onClick={close}>
                  <X size={20} strokeWidth={1.6} />
                </button>
              </div>

              <nav className="mobile-menu-links" aria-label="Mobiilivalikko">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={close}>
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mobile-menu-footer">
                <a className="premium-button premium-button--light w-full" href="#yhteys" onClick={close}>
                  {site.primaryCta}
                </a>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
