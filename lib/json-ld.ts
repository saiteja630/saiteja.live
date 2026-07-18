import { site } from "@/lib/site";
import type { WorkCase } from "@/lib/work";

export function getJsonLd() {
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        description: site.tagline,
        publisher: { "@id": personId },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: site.url,
        email: `mailto:${site.email}`,
        jobTitle: site.role,
        description: site.tagline,
        worksFor: {
          "@type": "Organization",
          name: site.employer,
          parentOrganization: {
            "@type": "Organization",
            name: site.employerGroup,
          },
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: site.education,
        },
        areaServed: {
          "@type": "Place",
          name: site.location,
        },
        knowsAbout: [
          "Digital commerce architecture",
          "PIM",
          "Composable commerce",
          "DAM",
          "AI enrichment",
          "Core Web Vitals",
          "Luxury retail",
        ],
        sameAs: site.social.map((item) => item.href),
      },
    ],
  };
}

export function getWorkCaseJsonLd(item: WorkCase) {
  const personId = `${site.url}/#person`;
  const caseUrl = `${site.url}/work/${item.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${site.url}/work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.title,
            item: caseUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${caseUrl}#case`,
        headline: item.title,
        description: item.summary,
        url: caseUrl,
        author: { "@id": personId },
        creator: { "@id": personId },
        about: item.tags,
        keywords: item.tags.join(", "),
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${site.url}/#website`,
        },
      },
    ],
  };
}
