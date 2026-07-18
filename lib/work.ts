export type WorkCase = {
  slug: string;
  title: string;
  industry: string;
  role: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  metricsNote: string;
  tags: string[];
  featured?: boolean;
};

export const workMetricsDisclaimer =
  "Outcomes reflect approximate results in line with industry benchmarks for similar performance and commerce architecture programs — not audited client KPIs.";

export const workCardDisclaimer =
  "Benchmark-informed outcomes · anonymized programs";

export const workCases: WorkCase[] = [
  {
    slug: "telecom-site-speed",
    title: "Cutting page load time for a major telecom digital experience",
    industry: "Telecommunications",
    role: "Senior Developer (acting Tech Lead)",
    featured: true,
    summary:
      "Led a performance program that improved Core Web Vitals on a high-traffic telecom site, unlocking stronger conversion and measurable ROI from the same traffic.",
    challenge:
      "A major telecom digital property was underperforming on page speed. Slow Largest Contentful Paint and heavy front-end payloads were hurting engagement on key acquisition and self-service journeys. Leadership needed both technical remediation and a clear path from performance work to business value.",
    approach: [
      "Acted as Tech Lead while remaining hands-on as Senior Developer — prioritized the critical rendering path, aligned engineers on measurement, and sequenced fixes by business impact.",
      "Audited LCP, INP, and CLS plus third-party weight; removed or deferred non-critical scripts and assets.",
      "Optimized images, caching, and above-the-fold delivery; reduced blocking resources on primary templates.",
      "Established a lightweight performance budget and regression checks so gains stuck after release.",
      "Partnered with product and marketing to tie speed improvements to funnel metrics — conversion, bounce, and engagement.",
    ],
    outcomes: [
      "~35–45% faster LCP on priority templates",
      "~10–15% lift in conversion on optimized journeys",
      "~15–20% lower bounce on key landing paths",
      "Performance investment framed as ROI: more conversions from the same traffic",
    ],
    metricsNote: workMetricsDisclaimer,
    tags: ["Performance", "Core Web Vitals", "Tech Lead", "Telecom"],
  },
  {
    slug: "ai-pim-enrichment",
    title: "Governed AI enrichment for product content at scale",
    industry: "Ecommerce / Luxury-adjacent retail",
    role: "Digital Commerce Architect",
    featured: true,
    summary:
      "Designed a human-in-the-loop GenAI enrichment pipeline grounded in PIM — faster content readiness without sacrificing brand voice or governance.",
    challenge:
      "A large catalog needed richer, on-brand descriptions and attributes across markets, but manual enrichment could not keep pace. Uncontrolled generative AI risked tone drift, inaccurate claims, and compliance issues.",
    approach: [
      "Designed a human-in-the-loop enrichment pipeline with PIM as the source of truth.",
      "Used LLMs for draft attribute fill, description variants, and localization assist — with brand and style guardrails.",
      "Added quality scoring, audit logging, and editor review before publish.",
      "Integrated via event-driven and API workflows so AI outputs landed back in governed product records, not one-off exports.",
    ],
    outcomes: [
      "~50–70% reduction in manual enrichment effort per SKU for targeted attribute sets",
      "~2–3× faster content readiness for new assortments",
      "Quality gates: drafts rejected or edited before publish rather than silent auto-publish",
      "Reusable pattern across categories without abandoning PIM governance",
    ],
    metricsNote: workMetricsDisclaimer,
    tags: ["AI", "PIM", "Enrichment", "Architecture"],
  },
  {
    slug: "product-data-architecture",
    title: "Bringing structure to a chaotic digital product data landscape",
    industry: "Digital commerce / Product information",
    role: "Digital Commerce Architect",
    featured: true,
    summary:
      "Turned unorganized product data into a governed model — structured, optimized, and ready for scalable digital experiences.",
    challenge:
      "Product information lived in fragmented, inconsistent forms across systems and teams. Attributes lacked a shared model, enrichment was ad hoc, and downstream channels inherited ambiguity. Scaling catalogs or launching markets meant fighting the data before building experiences.",
    approach: [
      "Assessed sources of truth, ownership gaps, and where unstructured or duplicated data blocked delivery.",
      "Defined a target product information architecture — entities, attributes, relationships, and governance rules.",
      "Structured and normalized data for reuse across channels; reduced one-off mappings.",
      "Optimized enrichment and publish flows so cleaner data reached storefront, search, and content systems faster.",
      "Partnered with business and engineering to make the model operable day-to-day, not just a diagram.",
    ],
    outcomes: [
      "~40–50% faster time-to-publish / enrichment cycle for catalog updates",
      "~30–40% fewer data defects reaching storefront and search",
      "Multi-channel reuse from one structured model across web, search, and merchandising",
      "Foundation for later AI enrichment and market expansion",
    ],
    metricsNote: workMetricsDisclaimer,
    tags: ["PIM", "Product Data", "Architecture", "Data Governance"],
  },
  {
    slug: "ecommerce-api-consolidation",
    title: "Untangling an ecommerce frontend choked by too many APIs",
    industry: "Ecommerce / Retail",
    role: "Senior Developer (technical lead)",
    summary:
      "Reduced chatter across an over-fragmented API layer, improving storefront performance and making the platform cheaper and clearer to evolve.",
    challenge:
      "An ecommerce site had grown a dense web of API calls — overlapping endpoints, redundant fetches, and waterfall requests on critical pages. The storefront felt slow, backend load was inflated, and every new feature risked adding more latency. The problem was not “add servers”; it was architectural noise on the client and integration boundary.",
    approach: [
      "Mapped the request graph for key journeys (PLP, PDP, cart/checkout) to find duplicate and sequential calls.",
      "Consolidated and composed APIs — fewer round trips, clearer contracts, and shared data where possible.",
      "Introduced caching, batching, and parallelization where appropriate; eliminated dead or low-value calls.",
      "Aligned frontend and backend on a thinner critical path so product work no longer stacked latency by default.",
      "Validated wins with before/after timing and perceived performance on real devices.",
    ],
    outcomes: [
      "~40–60% fewer API calls on the critical path",
      "~25–35% improvement in time-to-interactive on key commerce pages",
      "~20–30% reduction in backend request volume for those journeys",
      "Clearer contracts enabling faster feature delivery without a full platform rewrite",
    ],
    metricsNote: workMetricsDisclaimer,
    tags: ["Ecommerce", "APIs", "Performance", "Integration"],
  },
  {
    slug: "dam-commerce-assets",
    title: "Orchestrating digital assets for a high-volume ecommerce experience",
    industry: "Ecommerce / Brand commerce",
    role: "Digital Commerce Architect",
    summary:
      "Connected DAM to commerce and product records so launches moved faster, PDPs stayed lighter, and media stayed governed.",
    challenge:
      "Product and campaign media were siloed from commerce: slow asset-to-SKU linking, inconsistent renditions, and heavy unoptimized media hurting PDP performance and launch velocity.",
    approach: [
      "Architected DAM ↔ ecommerce / PIM linking so asset lifecycle tied to product records.",
      "Standardized renditions and delivery for web — responsive, modern formats, CDN-friendly.",
      "Introduced auto-tagging and metadata practices to improve findability for marketers and merchandisers.",
      "Aligned publish workflows so storefront and campaigns consumed governed assets, not ad hoc file drops.",
    ],
    outcomes: [
      "~30–40% faster asset-to-PDP readiness for launches",
      "~20–30% reduction in media weight on key product templates",
      "Fewer broken or mismatched assets through structured product–asset links",
      "Better reuse of campaign and product media across channels from one DAM source of truth",
    ],
    metricsNote: workMetricsDisclaimer,
    tags: ["DAM", "AEM Assets", "Ecommerce", "Performance"],
  },
];

export function getWorkCase(slug: string): WorkCase | undefined {
  return workCases.find((item) => item.slug === slug);
}

export function getWorkSlugs(): string[] {
  return workCases.map((item) => item.slug);
}

export function getFeaturedWork(limit = 3): WorkCase[] {
  const featured = workCases.filter((item) => item.featured);
  return (featured.length > 0 ? featured : workCases).slice(0, limit);
}

export function getRelatedWork(slug: string, limit = 2): WorkCase[] {
  const current = getWorkCase(slug);
  if (!current) {
    return workCases.filter((item) => item.slug !== slug).slice(0, limit);
  }

  const tagSet = new Set(current.tags);
  return workCases
    .filter((item) => item.slug !== slug)
    .map((item) => ({
      item,
      score: item.tags.filter((tag) => tagSet.has(tag)).length,
    }))
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map(({ item }) => item);
}
