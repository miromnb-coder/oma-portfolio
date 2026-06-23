"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/site-data";

const panelEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const linkParent = {
  open: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.12
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.035,
      staggerDirection: -1
    }
  }
};

const linkItem = {
  open: { opacity: 1, y: 0, filter: "blur(0px)" },
  closed: { opacity: 0, y: 18, filter: "blur(6px)" }
};

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
              transition={{ duration: 0.28, ease: panelEase }}
              onClick={close}
            />
            <motion.div
              className="mobile-menu-panel"
              initial={{ opacity: 0, y: -20, scale: 0.975, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, scale: 0.982, filter: "blur(6px)" }}
              transition={{ duration: 0.46, ease: panelEase }}
            >
              <div className="mobile-menu-top">
                <a className="logo" href="#etusivu" onClick={close}>
                  {site.name}
                </a>
                <button className="mobile-menu-button" type="button" aria-label="Sulje valikko" onClick={close}>
                  <X size={20} strokeWidth={1.6} />
                </button>
              </div>

              <motion.nav
                className="mobile-menu-links"
                aria-label="Mobiilivalikko"
                variants={linkParent}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    variants={linkItem}
                    transition={{ duration: 0.44, ease: panelEase }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>

              <motion.div
                className="mobile-menu-footer"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.42, delay: 0.28, ease: panelEase }}
              >
                <a className="premium-button premium-button--light w-full" href="#yhteys" onClick={close}>
                  {site.primaryCta}
                </a>
              </motion.div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
