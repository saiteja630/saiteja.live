import Link from "next/link";
import { DeferredArchitectureDiagram } from "@/components/ui/DeferredArchitectureDiagram";
import { site } from "@/lib/site";

const roleLines = site.roleLines;

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center section-shell pb-8 pt-24 sm:pt-28">
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0 text-center lg:text-left">
          <p className="hero-enter hero-enter-1 mb-5 text-[0.65rem] uppercase tracking-[0.3em] text-white/45 sm:mb-6 sm:text-xs">
            Luxury Commerce · Digital Architecture
          </p>

          <h1 className="hero-name hero-lcp mb-4 text-[var(--text-primary)] sm:mb-5">
            Sai Teja Madireddy
          </h1>

          <div className="hero-role-wrap hero-enter hero-enter-3 mb-6 sm:mb-8">
            {roleLines.map((line, index) => (
              <span key={line} className="hero-role-line">
                {index > 0 && <span className="sm:hidden"> </span>}
                {line}
              </span>
            ))}
          </div>

          <p className="subheader hero-enter hero-enter-4 mx-auto max-w-lg lg:mx-0">
            {site.tagline}
          </p>

          <div className="hero-enter hero-enter-5 mt-6 flex justify-center sm:mt-8 lg:justify-start">
            <span className="location-chip">{site.locationShort}</span>
          </div>

          <div className="hero-enter hero-enter-6 mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            <Link
              href="/#expertise"
              className="btn-primary-glow inline-flex items-center justify-center rounded-full px-8 py-3 text-xs uppercase tracking-[0.18em] sm:text-sm"
              data-umami-event="hero-explore-expertise"
              data-umami-event-section="expertise"
            >
              Explore expertise
            </Link>
            <Link
              href="/#contact"
              className="btn-outline inline-flex items-center justify-center rounded-full px-8 py-3 text-xs uppercase tracking-[0.18em] sm:text-sm"
              data-umami-event="hero-get-in-touch"
              data-umami-event-section="contact"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="hero-enter hero-enter-diagram flex justify-center">
          <div className="gradient-border w-full max-w-[440px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-5 shadow-sm sm:p-7">
            <DeferredArchitectureDiagram />
          </div>
        </div>
      </div>

      <div className="hero-enter hero-enter-scroll mx-auto mt-10 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <div className="scroll-hint h-8 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
      </div>
    </section>
  );
}
