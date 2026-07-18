import { site } from "@/lib/site";

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
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location,
          addressCountry: "US",
        },
        sameAs: site.social.map((item) => item.href),
      },
    ],
  };
}
