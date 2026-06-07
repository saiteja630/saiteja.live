import { Reveal } from "@/components/ui/Reveal";
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

        <Reveal className="subheader mb-10 block max-w-3xl sm:mb-12">
          {site.aiIntro}
        </Reveal>

        <Reveal className="mb-10 block sm:mb-14">
          <h3 className="mb-5 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]/80">
            Technologies &amp; Patterns
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {site.aiTechnologies.map((tech, index) => (
              <Reveal
                key={tech.name}
                delay={index * 0.06}
                className="glass-card gradient-border rounded-2xl p-5 sm:p-6"
              >
                <article>
                  <h4 className="font-display mb-2 text-base font-light tracking-wide text-white/95 sm:text-lg">
                    {tech.name}
                  </h4>
                  <p className="text-sm leading-relaxed text-white/60">
                    {tech.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mb-5 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]/80">
            AI Across My Specialties
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {site.aiImplementations.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.07}
                className="glass-card gradient-border rounded-2xl p-5 sm:p-7"
              >
                <article>
                  <span className="mb-3 inline-block rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/8 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--accent)]">
                    {item.domain}
                  </span>
                  <h4 className="font-display mb-3 text-lg font-light tracking-wide sm:text-xl">
                    {item.title}
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-white/65 sm:text-base">
                    {item.description}
                  </p>
                  <ul className="space-y-2 border-t border-white/8 pt-4">
                    {item.examples.map((example) => (
                      <li
                        key={example}
                        className="flex gap-2 text-sm text-white/55"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]/70"
                          aria-hidden="true"
                        />
                        {example}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
