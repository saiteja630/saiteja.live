import { site } from "@/lib/site";
import { LuxurySaiLogo } from "@/components/ui/logos/LuxurySaiLogo";
import { TechSaiLogo } from "@/components/ui/logos/TechSaiLogo";

const wordmarkProps = {
  viewBox: "0 0 120 32",
  width: 96,
  height: 26,
  role: "img" as const,
  "aria-label": "[SAI]",
};

const textStyle = {
  textAnchor: "middle" as const,
  fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  fontWeight: 700,
  letterSpacing: "0.08em",
};

export function SiteLogo({ className = "" }: { className?: string }) {
  const variant = site.logoVariant;

  if (variant === "tech") {
    return (
      <TechSaiLogo className={`h-7 w-auto sm:h-8 ${className}`.trim()} />
    );
  }

  if (variant === "luxury") {
    return (
      <LuxurySaiLogo className={`h-7 w-auto sm:h-8 ${className}`.trim()} />
    );
  }

  return (
    <svg
      {...wordmarkProps}
      className={`site-logo-minimal h-5 w-auto sm:h-6 ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="60" y="22" fontSize="20" fill="currentColor" {...textStyle}>
        [SAI]
      </text>
    </svg>
  );
}
