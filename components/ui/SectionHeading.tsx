"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  lead: string;
  trail: string;
  id?: string;
  subtitle?: string;
};

export function SectionHeading({ lead, trail, id, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-8 scroll-mt-24 sm:mb-12 md:scroll-mt-28">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="inline-block"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {lead}
        </motion.span>
        <motion.span
          className="section-title-accent inline-block"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {trail}
        </motion.span>
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-4 max-w-xl text-sm uppercase tracking-[0.25em] text-white/50 sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
