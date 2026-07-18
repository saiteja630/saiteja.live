import Script from "next/script";

const UMAMI_WEBSITE_ID = "09407491-fffd-4798-8fee-51f97cdb8ec7";

/**
 * Loads Umami after the page is idle so analytics never contend with LCP/INP.
 * data-domains keeps localhost/preview traffic off the free-tier quota.
 */
export function UmamiAnalytics() {
  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={UMAMI_WEBSITE_ID}
      data-domains="saiteja.live,www.saiteja.live"
      strategy="lazyOnload"
    />
  );
}
