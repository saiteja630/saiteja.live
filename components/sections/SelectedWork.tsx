import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/work/WorkCard";
import { getFeaturedWork, workCardDisclaimer } from "@/lib/work";

export function SelectedWork() {
  const featured = getFeaturedWork(3);

  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          lead="Se"
          trail="lected work"
          id="work"
          subtitle="Outcomes · Architecture · Performance"
        />

        <Reveal className="subheader mb-3 block max-w-3xl">
          Featured programs across performance, product data, and AI
          enrichment — anonymized and framed with industry-benchmark outcomes.
        </Reveal>
        <Reveal delay={0.05} className="mb-10 block text-xs uppercase tracking-[0.16em] text-white/40 sm:mb-14">
          {workCardDisclaimer}
        </Reveal>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((item, index) => (
            <WorkCard key={item.slug} item={item} index={index} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center sm:mt-12">
          <Link
            href="/work"
            className="inline-flex rounded-full border border-[var(--accent)]/35 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[var(--accent)] transition hover:bg-[var(--accent)]/10"
            data-umami-event="work-view-all"
          >
            View all case studies
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
