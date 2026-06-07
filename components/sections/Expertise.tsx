"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Expertise() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          lead="Ex"
          trail="pertise"
          id="expertise"
          subtitle="Domain capabilities across the commerce stack"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="subheader mb-8 max-w-3xl sm:mb-12"
        >
          I architect end-to-end digital commerce solutions — from product data
          foundations and integrations to customer-facing experiences — with
          deep specialization across the luxury retail technology stack.
        </motion.p>

        <div className="expertise-grid">
          {site.expertise.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card glass-card-hover gradient-border rounded-2xl p-5 sm:p-6"
            >
              <span className="mb-4 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
                {item.abbreviation}
              </span>
              <h3 className="font-display mb-3 text-xl font-light tracking-wide sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
