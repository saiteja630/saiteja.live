import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = {
  width: 1200,
  height: 630,
} as const;

export const ogContentType = "image/png";

export const ogAlt = `${site.name} — ${site.role}`;

type OgImageOptions = {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  footerNote?: string;
};

/** Older Safari UA so Google Fonts returns TTF/OTF (Satori cannot use woff2). */
const FONT_UA =
  "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1";

async function loadGoogleFont(family: string, weight: number) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`,
      { headers: { "User-Agent": FONT_UA } },
    ).then((res) => res.text());

    const match = css.match(/src: url\(([^)]+)\)/);
    if (!match?.[1]) {
      return null;
    }

    return fetch(match[1]).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export async function generateOgImage(options: OgImageOptions = {}) {
  const {
    title = site.name,
    subtitle = site.role,
    eyebrow = "Luxury Commerce · Digital Architecture",
    footerNote = "Architecting composable commerce for luxury retail",
  } = options;

  const [displayFont, bodyFont] = await Promise.all([
    loadGoogleFont("Cormorant Garamond", 400),
    loadGoogleFont("Raleway", 500),
  ]);

  const fonts = [
    displayFont
      ? {
          name: "Cormorant Garamond",
          data: displayFont,
          style: "normal" as const,
          weight: 400 as const,
        }
      : null,
    bodyFont
      ? {
          name: "Raleway",
          data: bodyFont,
          style: "normal" as const,
          weight: 500 as const,
        }
      : null,
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    style: "normal";
    weight: 400 | 500;
  }[];

  const titleSize = title.length > 60 ? 48 : title.length > 40 ? 56 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(145deg, #0c1018 0%, #121a28 48%, #182232 100%)",
          color: "#eceae6",
          fontFamily: bodyFont ? "Raleway" : "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7eb8da",
          }}
        >
          {eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontFamily: displayFont ? "Cormorant Garamond" : "serif",
              fontSize: titleSize,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(236, 234, 230, 0.78)",
              letterSpacing: "0.02em",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 780,
              fontSize: 22,
              lineHeight: 1.45,
              color: "rgba(236, 234, 230, 0.62)",
            }}
          >
            {footerNote}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#c4a882",
              letterSpacing: "0.04em",
            }}
          >
            saiteja.live
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      ...(fonts.length > 0 ? { fonts } : {}),
    },
  );
}
