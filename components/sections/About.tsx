import { AboutPhoto } from "@/components/sections/AboutPhoto";
import { Reveal } from "@/components/ui/Reveal";
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
          <AboutPhoto />

          <div className="space-y-5 sm:space-y-6">
            <Reveal>
              <h3 className="font-display text-xl font-light tracking-wide sm:text-2xl md:text-3xl">
                Architecting luxury commerce
              </h3>
            </Reveal>
            {site.bio.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.1} direction="right">
                <p className="subheader">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
