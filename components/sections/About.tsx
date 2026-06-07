"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function About() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          lead="Ab"
          trail="out"
          id="about"
          subtitle="Digital Commerce Architect · Luxury Retail"
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:mx-0"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[var(--accent)] to-transparent opacity-20 blur-xl" />
            <div className="gradient-border glass-card relative overflow-hidden rounded-3xl p-1">
              <Image
                src="/images/me.jpg"
                alt="Sai Teja Madireddy"
                width={360}
                height={360}
                className="h-auto w-full rounded-[1.35rem] object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-card absolute -bottom-4 -right-2 rounded-2xl px-4 py-3 sm:-right-4"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
                Based in
              </p>
              <p className="text-sm font-light tracking-wide sm:text-base">
                {site.locationShort}
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-5 sm:space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-xl font-light tracking-wide sm:text-2xl md:text-3xl"
            >
              Architecting luxury commerce
            </motion.h3>
            {site.bio.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="subheader"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
