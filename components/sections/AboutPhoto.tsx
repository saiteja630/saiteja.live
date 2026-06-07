"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { site } from "@/lib/site";

export function AboutPhoto() {
  return (
    <m.div
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
          width={720}
          height={720}
          sizes="(max-width: 640px) 300px, 340px"
          loading="lazy"
          className="h-auto w-full rounded-[1.35rem] object-cover"
        />
      </div>
      <m.div
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
      </m.div>
    </m.div>
  );
}
