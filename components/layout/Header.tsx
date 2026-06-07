"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Platforms", href: "/#platforms" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--border)] bg-[rgba(12,16,24,0.92)] shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link
            href="/"
            className="relative z-50 text-xs uppercase tracking-[0.35em] text-white/85 transition hover:text-[var(--accent)] sm:text-sm"
            onClick={() => setOpen(false)}
          >
            Sai Teja
          </Link>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent)]/25 bg-white/5 md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute h-0.5 w-5 bg-[var(--accent)] transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-[var(--accent)] transition-all duration-300 ${
                open ? "opacity-0 scale-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-[var(--accent)] transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/65 transition hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] lg:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-[rgba(12,16,24,0.97)] backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="font-display block py-4 text-3xl font-light uppercase tracking-[0.12em] text-white/90 transition hover:text-[var(--accent)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pb-10 text-center text-xs uppercase tracking-[0.3em] text-white/35"
              style={{ paddingBottom: "calc(2.5rem + var(--safe-bottom))" }}
            >
              Tap a section to explore
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
