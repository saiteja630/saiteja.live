import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRelatedWork, getWorkCase, getWorkSlugs } from "@/lib/work";
import { getWorkCaseJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkCase(slug);
  if (!item) {
    return { title: `Work — ${site.name}` };
  }

  return {
    title: `${item.title} — ${site.name}`,
    description: item.summary,
    openGraph: {
      title: `${item.title} — ${site.name}`,
      description: item.summary,
      url: `${site.url}/work/${item.slug}`,
      type: "article",
    },
  };
}

export default async function WorkCasePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getWorkCase(slug);
  if (!item) {
    notFound();
  }

  const related = getRelatedWork(item.slug, 2);
  const jsonLd = getWorkCaseJsonLd(item);

  return (
    <article className="section-shell pt-28 sm:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/work"
          className="mb-8 inline-flex text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-[var(--accent)]"
        >
          ← All work
        </Link>

        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
          {item.industry}
        </p>
        <h1 className="font-display mb-4 text-3xl font-light leading-tight tracking-wide text-[var(--text-primary)] sm:text-4xl md:text-5xl">
          {item.title}
        </h1>
        <p className="mb-3 text-sm text-white/55">{item.role}</p>
        <p className="subheader mb-10 text-base sm:mb-12 sm:text-lg">
          {item.summary}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="work-tag">
              {tag}
            </span>
          ))}
        </div>

        <section className="mb-10 sm:mb-12">
          <h2 className="font-display mb-4 text-2xl font-light text-[var(--accent)]">
            Challenge
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            {item.challenge}
          </p>
        </section>

        <section className="mb-10 sm:mb-12">
          <h2 className="font-display mb-4 text-2xl font-light text-[var(--accent)]">
            Approach
          </h2>
          <ul className="space-y-3">
            {item.approach.map((step) => (
              <li
                key={step}
                className="flex gap-3 text-base leading-relaxed text-white/70 sm:text-lg"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="glass-card gradient-border mb-10 rounded-2xl p-5 sm:mb-12 sm:p-8">
          <h2 className="font-display mb-3 text-2xl font-light text-[var(--accent)]">
            Outcome
          </h2>
          <p className="mb-5 text-xs leading-relaxed text-white/45 sm:text-sm">
            {item.metricsNote}
          </p>
          <ul className="space-y-3">
            {item.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex gap-3 text-base leading-relaxed text-white/80 sm:text-lg"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-warm)]" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mb-14 flex flex-wrap gap-3 sm:mb-16">
          <Link
            href="/#contact"
            className="btn-primary-glow rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.2em] sm:text-sm"
            data-umami-event="work-case-contact"
            data-umami-event-slug={item.slug}
          >
            Discuss a similar program
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-white/20 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)] sm:text-sm"
          >
            More case studies
          </Link>
        </div>

        {related.length > 0 ? (
          <section>
            <h2 className="mb-6 text-xs uppercase tracking-[0.25em] text-white/45">
              Related work
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  className="glass-card rounded-2xl p-5 transition hover:border-[var(--accent)]/30"
                >
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                    {rel.industry}
                  </span>
                  <span className="font-display text-lg font-light text-[var(--text-primary)]">
                    {rel.title}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
