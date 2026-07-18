import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { WorkCase } from "@/lib/work";
import { workCardDisclaimer } from "@/lib/work";

type WorkCardProps = {
  item: WorkCase;
  index?: number;
};

export function WorkCard({ item, index = 0 }: WorkCardProps) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Link
        href={`/work/${item.slug}`}
        className="glass-card glass-card-hover gradient-border group flex h-full flex-col rounded-2xl p-5 transition sm:p-7"
        data-umami-event="work-card-click"
        data-umami-event-slug={item.slug}
      >
        <span className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
          {item.industry}
        </span>
        <h3 className="font-display mb-3 text-xl font-light tracking-wide text-[var(--text-primary)] transition group-hover:text-[var(--accent)] sm:text-2xl">
          {item.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-white/65 sm:text-base">
          {item.summary}
        </p>
        <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-white/40">
          {workCardDisclaimer}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="work-tag">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-warm)] transition group-hover:text-[var(--accent)]">
          Read case study →
        </span>
      </Link>
    </Reveal>
  );
}
