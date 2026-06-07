"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Expertise() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const total = site.expertise.length;
  const activeIndex = Math.min(
    Math.round(progress * Math.max(total - 1, 0)),
    total - 1,
  );

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const scrolled = el.scrollLeft > 8;

    setHasScrolled(scrolled);
    setShowLeftFade(scrolled);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

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

        <div className="expertise-carousel">
          <div className="expertise-scroll-wrap">
            <div
              className={`expertise-fade expertise-fade-right${hasScrolled ? " expertise-fade-dim" : ""}`}
              aria-hidden="true"
            />
            <div
              className={`expertise-fade expertise-fade-left${showLeftFade ? " expertise-fade-visible" : ""}`}
              aria-hidden="true"
            />

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="expertise-grid"
            >
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

          <div className="expertise-mobile-nav md:hidden">
            <p
              className={`expertise-swipe-hint${hasScrolled ? " expertise-swipe-hint-hidden" : ""}`}
              aria-hidden={hasScrolled}
            >
              <span>Swipe to explore</span>
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </p>

            <div
              className="expertise-progress"
              role="progressbar"
              aria-valuenow={activeIndex + 1}
              aria-valuemin={1}
              aria-valuemax={total}
              aria-label={`Expertise card ${activeIndex + 1} of ${total}`}
            >
              <div
                className="expertise-progress-fill"
                style={{ width: `${(progress || 0) * 100}%` }}
              />
            </div>

            <p className="expertise-counter">
              {activeIndex + 1} of {total}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
