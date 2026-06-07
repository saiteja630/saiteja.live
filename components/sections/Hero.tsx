"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { site } from "@/lib/site";

const roleLines = site.roleLines;

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center section-shell pb-8 pt-24 sm:pt-28">
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-5 text-[0.65rem] uppercase tracking-[0.3em] text-white/45 sm:mb-6 sm:text-xs"
          >
            Luxury Commerce · Digital Architecture
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hero-name mb-4 text-[var(--text-primary)] sm:mb-5"
          >
            Sai Teja Madireddy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-role-wrap mb-6 sm:mb-8"
          >
            {roleLines.map((line, index) => (
              <span key={line} className="hero-role-line">
                {index > 0 && <span className="sm:hidden"> </span>}
                {line}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="subheader max-w-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-6 sm:mt-8"
          >
            <span className="location-chip">{site.locationShort}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <Link
              href="/#expertise"
              className="btn-primary-glow inline-flex items-center justify-center rounded-full px-8 py-3 text-xs uppercase tracking-[0.18em] sm:text-sm"
            >
              Explore expertise
            </Link>
            <Link
              href="/#contact"
              className="btn-outline inline-flex items-center justify-center rounded-full px-8 py-3 text-xs uppercase tracking-[0.18em] sm:text-sm"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="gradient-border w-full max-w-[440px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-5 sm:p-7">
            <ArchitectureDiagram />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mx-auto mt-10 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <div className="scroll-hint h-8 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
      </motion.div>
    </section>
  );
}
