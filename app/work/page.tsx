import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/work/WorkCard";
import { site } from "@/lib/site";
import { workCases } from "@/lib/work";

export const metadata: Metadata = {
  title: `Selected Work — ${site.name}`,
  description:
    "Case studies in site performance, ecommerce API architecture, product data, AI enrichment, and DAM for digital commerce.",
  openGraph: {
    title: `Selected Work — ${site.name}`,
    description:
      "Case studies in site performance, ecommerce API architecture, product data, AI enrichment, and DAM for digital commerce.",
    url: `${site.url}/work`,
  },
};

export default function WorkIndexPage() {
  return (
    <section className="section-shell pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          lead="Wo"
          trail="rk"
          subtitle="Case studies · Anonymized programs"
        />

        <p className="subheader mb-10 max-w-3xl sm:mb-14">
          Programs across telecom and ecommerce performance, product
          information architecture, governed AI enrichment, and digital asset
          orchestration. Metrics reflect industry-benchmark ranges for similar
          initiatives — not audited client KPIs.
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workCases.map((item, index) => (
            <WorkCard key={item.slug} item={item} index={index} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-white/50">
          Interested in a similar program?{" "}
          <Link
            href="/#contact"
            className="underline decoration-[var(--accent)] underline-offset-4 transition hover:text-white"
          >
            Get in touch
          </Link>
        </p>
      </div>
    </section>
  );
}
