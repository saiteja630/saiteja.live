import { site } from "@/lib/site";

export type LogoVariant = "tech" | "luxury" | "minimal";

export const logoVariants: LogoVariant[] = ["tech", "luxury", "minimal"];

export const logoIconByVariant: Record<LogoVariant, string> = {
  tech: "/images/logo-icon-tech.svg",
  luxury: "/images/logo-icon-luxury.svg",
  minimal: "/images/logo-icon-minimal.svg",
};

export function getLogoIconPath(variant: LogoVariant = site.logoVariant) {
  return logoIconByVariant[variant];
}

/** Luxury gold palette aligned with --accent-warm */
export const logoLuxuryGradient = {
  start: "#e8d5b5",
  mid: "#c4a882",
  end: "#9a7d55",
} as const;
