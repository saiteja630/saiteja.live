export const site = {
  /**
   * Header + favicon logo:
   * - "tech" — geometric SAi with </> (developer mark)
   * - "luxury" — interconnected serif SAI in warm gold
   * - "minimal" — all-white [SAI] wordmark
   */
  //logoVariant: "luxury" as "tech" | "luxury" | "minimal",
  logoVariant: "tech" as "tech" | "luxury" | "minimal",

  name: "Sai Teja Madireddy",
  shortName: "Sai Teja",
  role: "Digital Commerce Architect",
  roleLines: ["Digital Commerce", "Architect"],
  title: "Sai Teja Madireddy — Digital Commerce Architect",
  tagline:
    "Architecting composable commerce experiences across PIM, search, DAM, and omnichannel — with a focus on luxury retail.",
  url: "https://saiteja.live",
  email: "saitejamadireddy@gmail.com",
  location: "New Jersey / New York Metro",
  locationShort: "NJ / NY",
  origin: "Nellore, Andhra Pradesh, India",
  education: "University of Michigan",
  employer: "Tiffany & Co",
  employerGroup: "LVMH",
  bio: [
    "I'm Sai Teja Madireddy, a Digital Commerce Architect based in the New Jersey and New York metro area. I specialize in designing and delivering enterprise digital commerce platforms for luxury retail.",
    "My work spans Product Information Management, search, digital asset management, ecommerce, and omnichannel experiences — connecting best-in-class platforms into cohesive, scalable architectures.",
    "I work with AEM (Cloud and native), Salesforce Commerce Cloud, Akeneo, and Algolia to help global brands govern product data, accelerate time-to-market, and deliver premium customer experiences across markets and channels.",
    "I currently serve as a Digital Commerce Architect within the LVMH group, contributing to digital transformation at Tiffany & Co. Originally from Nellore, India, I earned my Master's degree from the University of Michigan before building a career at the intersection of technology and luxury commerce.",
  ],
  expertise: [
    {
      id: "pim",
      abbreviation: "PIM",
      title: "Product Information Management",
      description:
        "Centralized product data governance, multi-market catalogs, and enrichment workflows that scale across brands and regions.",
    },
    {
      id: "pxm",
      abbreviation: "PXM",
      title: "Product Experience Management",
      description:
        "End-to-end product storytelling — structuring attributes, variants, and localized content for premium digital experiences.",
    },
    {
      id: "search",
      abbreviation: "SEARCH",
      title: "Search & Discovery",
      description:
        "Intelligent search architecture, personalization, faceted navigation, and merchandising rules that elevate findability and conversion.",
    },
    {
      id: "dam",
      abbreviation: "DAM",
      title: "Digital Asset Management",
      description:
        "Rich media orchestration, asset lifecycle management, and seamless delivery across commerce, content, and campaign channels.",
    },
    {
      id: "ecommerce",
      abbreviation: "ECOM",
      title: "Ecommerce & Storefront",
      description:
        "Composable commerce platforms, headless storefronts, and high-performance shopping journeys built for luxury expectations.",
    },
    {
      id: "omnichannel",
      abbreviation: "OMNI",
      title: "Omnichannel Commerce",
      description:
        "Unified product experiences across web, mobile, retail, clienteling, and partner channels with consistent data and storytelling.",
    },
    {
      id: "composable",
      abbreviation: "MACH",
      title: "Composable Architecture",
      description:
        "API-first, modular system design — assembling best-of-breed platforms into scalable, evolvable commerce ecosystems.",
    },
    {
      id: "integration",
      abbreviation: "API",
      title: "Integration & Interoperability",
      description:
        "Connecting PIM, commerce, CMS, search, DAM, and PLM through event-driven APIs, middleware, and reliable data pipelines.",
    },
    {
      id: "governance",
      abbreviation: "DATA",
      title: "Data Governance & Quality",
      description:
        "Master data standards, workflow discipline, data cleansing, and compliance frameworks that sustain enterprise catalog health.",
    },
    {
      id: "ai",
      abbreviation: "AI",
      title: "AI Enablement",
      description:
        "AI-assisted enrichment, intelligent search, content automation, and architecture advisory for modern commerce stacks.",
    },
    {
      id: "advisory",
      abbreviation: "SOL",
      title: "Solution Architecture",
      description:
        "Technology roadmaps, platform evaluations, integration blueprints, and cross-functional alignment for complex digital programs.",
    },
    {
      id: "luxury",
      abbreviation: "LUX",
      title: "Luxury Retail Digital",
      description:
        "High-consideration purchase journeys, global market launches, and brand-integrity standards unique to jewelry and luxury houses.",
    },
    {
      id: "performance",
      abbreviation: "PERF",
      title: "Page Speed & Web Performance",
      description:
        "Core Web Vitals optimization, bundle splitting, image and font tuning, and edge delivery — building storefronts that score 90+ on Lighthouse without sacrificing design or motion.",
    },
    {
      id: "seo",
      abbreviation: "SEO",
      title: "Search Engine Optimization",
      description:
        "Technical SEO for headless commerce — semantic markup, metadata, crawlability, structured data, and performance-aligned discoverability across global luxury markets.",
    },
    {
      id: "accessibility",
      abbreviation: "A11Y",
      title: "Accessible Web Experiences",
      description:
        "WCAG-aligned interfaces with keyboard navigation, screen reader support, reduced-motion respect, and inclusive patterns that meet enterprise and regulatory standards.",
    },
  ],
  platforms: [
    { name: "AEM Cloud", category: "CMS / Experience" },
    { name: "AEM Native", category: "CMS / Experience" },
    { name: "Adobe Experience Manager Assets", category: "DAM", shortName: "AEM Assets" },
    { name: "Salesforce Commerce Cloud", category: "Commerce", shortName: "SFCC" },
    { name: "Akeneo", category: "PIM / PXM" },
    { name: "Algolia", category: "Search & Discovery" },
    { name: "Next.js", category: "Headless Experience" },
    { name: "Vercel", category: "Cloud / Edge" },
    { name: "Node.js", category: "APIs & Integration" },
    { name: "TypeScript", category: "Application Layer" },
    { name: "Java", category: "Enterprise Backend" },
    { name: "Python", category: "Data & Automation" },
    { name: "React", category: "Frontend Framework" },
    { name: "Vue", category: "Frontend Framework" },
    { name: "Docker", category: "Containers / DevOps" },
    { name: "MuleSoft", category: "Integration / iPaaS" },
  ],
  architectureLayers: [
    {
      id: "experience",
      label: "Experience Layer",
      modules: ["AEM Cloud", "React / Vue", "Next.js"],
    },
    {
      id: "commerce",
      label: "Commerce",
      modules: ["SFCC", "Omnichannel", "Ecommerce"],
    },
    {
      id: "data",
      label: "Data & Search",
      modules: ["Akeneo PIM", "Algolia", "PXM / Governance"],
    },
    {
      id: "assets",
      label: "Assets & DAM",
      modules: ["AEM Assets", "DAM", "AI Enrichment"],
    },
    {
      id: "integration",
      label: "Integration",
      modules: ["MuleSoft", "Java", "Python"],
    },
    {
      id: "platform",
      label: "Platform & DevOps",
      modules: ["Docker", "Node.js", "Vercel"],
    },
  ],
  industries: [
    {
      title: "Global Multi-Market Catalogs",
      description:
        "Structuring and governing product data across diverse markets, languages, and regulatory requirements at enterprise scale.",
    },
    {
      title: "Premium Product Storytelling",
      description:
        "Translating craftsmanship, heritage, and brand narrative into rich, consistent digital product experiences.",
    },
    {
      title: "Governance at Scale",
      description:
        "Establishing data quality, workflow discipline, and integration patterns that sustain growth in dynamic luxury retail.",
    },
  ],
  industryFocus:
    "I bring deep specialization in luxury retail and jewelry — where precision, brand integrity, and exceptional customer experience are non-negotiable.",
  aiIntro:
    "I embed AI into enterprise commerce architectures as governed, production-ready capability — not experimentation. By connecting LLMs, semantic search, computer vision, and event-driven pipelines to PIM, DAM, storefront, and integration layers, teams gain faster enrichment, sharper discovery, and brand-safe content at luxury retail scale.",
  aiTechnologies: [
    {
      name: "LLMs & GenAI APIs",
      description:
        "Azure OpenAI, AWS Bedrock, and API-first model access for attribute generation, translation, and brand-tone copy — orchestrated through Node.js and Python services.",
    },
    {
      name: "RAG & Knowledge Retrieval",
      description:
        "Grounded generation using product catalogs, style guides, and DAM metadata so outputs stay accurate, on-brand, and auditable for regulated luxury content.",
    },
    {
      name: "Vector Search & Embeddings",
      description:
        "Semantic product discovery beyond keywords — embedding pipelines paired with Algolia NeuralSearch and vector indexes for intuitive, high-consideration shopping.",
    },
    {
      name: "ML-Enhanced Search",
      description:
        "Algolia AI Synonyms, query categorization, and personalization rules that improve findability across large, attribute-rich jewelry and luxury catalogs.",
    },
    {
      name: "Computer Vision & DAM AI",
      description:
        "Automated tagging, metadata enrichment, and asset classification for AEM Assets and enterprise DAM — accelerating global media operations.",
    },
    {
      name: "Event-Driven AI Pipelines",
      description:
        "Async enrichment via MuleSoft, webhooks, and queue-based workflows triggered on product publish, asset upload, or catalog change events.",
    },
  ],
  aiImplementations: [
    {
      domain: "PIM / PXM",
      title: "Intelligent Product Enrichment",
      description:
        "Embed AI inside Akeneo enrichment workflows to draft descriptions, infer attributes from specs, and accelerate multi-locale localization — with human-in-the-loop review for brand integrity.",
      examples: [
        "Attribute inference from technical specs",
        "Brand-tone description generation",
        "Translation & localization assist",
      ],
    },
    {
      domain: "Search & Discovery",
      title: "AI-Powered Findability",
      description:
        "Layer Algolia AI capabilities with custom embedding strategies so customers discover products through natural language, visual similarity, and personalized ranking.",
      examples: [
        "NeuralSearch & semantic matching",
        "AI synonym & query understanding",
        "Personalized ranking & merchandising",
      ],
    },
    {
      domain: "DAM & Assets",
      title: "Visual Intelligence for Media",
      description:
        "Apply computer vision to auto-tag, classify, and enrich assets in AEM Assets and DAM systems — reducing manual metadata work while preserving governance standards.",
      examples: [
        "Auto-tagging & smart metadata",
        "Duplicate & quality detection",
        "Asset-to-product linking",
      ],
    },
    {
      domain: "Ecommerce & Storefront",
      title: "Conversational & Guided Commerce",
      description:
        "Integrate AI assistants and recommendation engines into SFCC and headless Next.js storefronts for guided selling, cross-sell logic, and premium clienteling experiences.",
      examples: [
        "Product Q&A grounded in PIM data",
        "Recommendation & cross-sell engines",
        "Clienteling & advisor tooling",
      ],
    },
    {
      domain: "Omnichannel",
      title: "Consistent AI Across Channels",
      description:
        "Serve the same governed product narratives and discovery intelligence across web, mobile, retail POS, and partner channels via API-first, composable AI services.",
      examples: [
        "Unified enrichment APIs",
        "Channel-aware content variants",
        "Store associate knowledge assist",
      ],
    },
    {
      domain: "Integration & Governance",
      title: "Governed AI Operations",
      description:
        "Architect MuleSoft and event-driven pipelines with guardrails — prompt versioning, audit trails, PII filtering, and quality scoring so AI scales safely in enterprise programs.",
      examples: [
        "MuleSoft-orchestrated AI workflows",
        "Data quality & anomaly detection",
        "Prompt governance & audit logging",
      ],
    },
  ],
  marqueeTags: [
    "PIM",
    "PXM",
    "Algolia",
    "Akeneo",
    "SFCC",
    "AEM",
    "AEM Assets",
    "DAM",
    "Omnichannel",
    "Composable Commerce",
    "MACH Architecture",
    "Luxury Retail",
    "Data Governance",
    "Headless Commerce",
    "Web Performance",
    "SEO",
    "Accessibility",
    "AI Enablement",
    "Solution Architecture",
    "Java",
    "Python",
    "React",
    "Vue",
    "Docker",
    "MuleSoft",
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saitejamadireddy/",
      iconUrl: "/icons/linkedin.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/saiteja630",
      iconUrl: "/icons/facebook.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/saiteja630/",
      iconUrl: "/icons/instagram.svg",
    },
  ],
} as const;
