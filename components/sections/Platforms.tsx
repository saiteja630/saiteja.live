"use client";

import { m } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Platforms() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          lead="Pl"
          trail="atforms"
          id="platforms"
          subtitle="Enterprise tools I architect with daily"
        />

        <div className="platforms-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {site.platforms.map((platform, index) => {
            const displayName =
              "shortName" in platform && platform.shortName
                ? platform.shortName
                : platform.name;

            return (
              <m.div
                key={platform.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="platform-chip glass-card gradient-border rounded-2xl p-5 sm:p-6"
                style={{ animationDelay: `${-index * 2.8}s` }}
              >
                <p className="mb-2 text-[0.65rem] uppercase tracking-[0.25em] text-white/45">
                  {platform.category}
                </p>
                <h3 className="font-display text-xl font-light tracking-wide text-[var(--accent)] sm:text-2xl">
                  {displayName}
                </h3>
                {"shortName" in platform && platform.shortName ? (
                  <p className="mt-1 text-xs text-white/50">{platform.name}</p>
                ) : null}
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
