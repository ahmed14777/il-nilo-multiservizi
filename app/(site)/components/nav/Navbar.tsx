"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { siteConfig } from "@/config/site";

type NavItem = { href: string; label: string };

/** Sticky navbar with transparent → blurred background on scroll. */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // ✅ اجعلها readonly لأن siteConfig.nav مُعرّفة بـ as const
  const items: ReadonlyArray<NavItem> = siteConfig.nav;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.85)"
            : "rgba(255,255,255,0)",
        }}
        className="fixed inset-x-0 top-0 z-50 border-b border-transparent supports-[backdrop-filter]:backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2" aria-label="Homepage">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="link">
                {i.label}
              </a>
            ))}
            <a href="#preventivo" className="btn-primary">
              Richiedi preventivo
            </a>
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden h-10 w-10 rounded-md hover:bg-slateish"
            aria-label="Apri menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </motion.header>
      <div className="h-16" aria-hidden />
      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} items={items} />}
      </AnimatePresence>
    </>
  );
}
