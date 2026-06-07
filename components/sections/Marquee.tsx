import { site } from "@/lib/site";

function MarqueeRow({
  items,
  reverse = false,
  className = "",
}: {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden py-3 ${className}`}>
      <div
        className={`flex w-max gap-6 whitespace-nowrap sm:gap-10 ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
      >
        {doubled.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/60 sm:gap-10 sm:text-sm sm:tracking-[0.35em]"
          >
            {tag}
            <span className="text-[var(--accent)]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  const tags = site.marqueeTags;
  const reversed = [...tags].reverse();

  return (
    <section className="border-y border-white/10 bg-black/10">
      <MarqueeRow items={tags} />
      <MarqueeRow items={reversed} reverse className="border-t border-white/5" />
    </section>
  );
}
