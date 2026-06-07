import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Industry() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          lead="In"
          trail="dustry"
          id="industry"
          subtitle="Luxury retail · Jewelry · Global markets"
        />

        <Reveal className="subheader mb-10 block max-w-3xl sm:mb-14">
          {site.industryFocus}
        </Reveal>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {site.industries.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 0.1}
              className="glass-card gradient-border rounded-2xl p-5 sm:p-7"
            >
              <article>
                <span className="mb-4 block font-display text-3xl font-light text-[var(--accent)]/40 sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mb-3 text-lg font-light tracking-wide sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
