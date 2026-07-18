import { generateOgImage, ogAlt, ogContentType, ogSize } from "@/lib/og-image";
import { getWorkCase, getWorkSlugs } from "@/lib/work";
import { site } from "@/lib/site";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const item = getWorkCase(slug);

  if (!item) {
    return generateOgImage();
  }

  return generateOgImage({
    title: item.title,
    subtitle: item.role,
    eyebrow: `Case study · ${item.industry}`,
    footerNote: `${site.name} — Selected work`,
  });
}
