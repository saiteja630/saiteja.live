type SectionHeadingProps = {
  lead: string;
  trail: string;
  id?: string;
  subtitle?: string;
};

export function SectionHeading({ lead, trail, id, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-8 scroll-mt-24 sm:mb-12 md:scroll-mt-28">
      <h2 className="section-title section-reveal">
        <span className="section-reveal section-reveal-lead inline-block">
          {lead}
        </span>
        <span className="section-reveal section-reveal-trail section-title-accent inline-block">
          {trail}
        </span>
      </h2>
      {subtitle ? (
        <p className="section-reveal section-reveal-sub mt-4 max-w-xl text-sm uppercase tracking-[0.25em] text-white/50 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
