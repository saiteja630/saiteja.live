"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function AISpecialty() {
  return (
    <section className="section-shell pt-0">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          lead="A"
          trail="I"
          id="ai"
          subtitle="Intelligence woven into the architecture"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card gradient-border overflow-hidden rounded-3xl p-6 sm:p-10"
        >
          <p className="subheader mb-8 max-w-2xl">
            I integrate AI capabilities into commerce architectures — not as
            novelty, but as strategic infrastructure for enrichment, discovery,
            and operational efficiency.
          </p>

          <div className="flex flex-wrap gap-3">
            {site.aiTopics.map((topic, index) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/8 px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-white/80 sm:text-sm"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
