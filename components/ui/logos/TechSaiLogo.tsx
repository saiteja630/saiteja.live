"use client";

import { useId } from "react";

type TechSaiLogoProps = {
  className?: string;
  icon?: boolean;
};

/** Geometric SAi mark — theme-aware via --accent and --text-primary */
export function TechSaiLogo({ className = "", icon = false }: TechSaiLogoProps) {
  const gradId = useId().replace(/:/g, "");

  if (icon) {
    return (
      <svg
        viewBox="0 0 32 32"
        role="img"
        aria-label="SAi"
        className={`site-logo-tech-icon ${className}`.trim()}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${gradId}-icon`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" className="logo-tech-a-grad-top" />
            <stop offset="100%" className="logo-tech-a-grad-bottom" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="7" className="logo-tech-icon-bg" />
        <polygon
          className="logo-tech-a-glow"
          points="16,7 9,25 23,25"
          transform="translate(16 16) scale(1.12) translate(-16 -16)"
        />
        <polygon
          className="logo-tech-a-fill"
          points="16,7 9,25 23,25"
          style={{ fill: `url(#${gradId}-icon)` }}
        />
        <text
          x="16"
          y="19"
          textAnchor="middle"
          className="logo-tech-code"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize="5"
          fontWeight="700"
        >
          {"</>"}
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 108 38"
      role="img"
      aria-label="SAi"
      className={`site-logo-tech ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" className="logo-tech-a-grad-top" />
          <stop offset="100%" className="logo-tech-a-grad-bottom" />
        </linearGradient>
      </defs>

      <text
        x="14"
        y="31"
        className="logo-tech-primary"
        fontFamily="var(--font-raleway), Raleway, system-ui, sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        S
      </text>

      <g className="logo-tech-a-group">
        <polygon
          className="logo-tech-a-glow"
          points="48,5 35,33 61,33"
          transform="translate(48 19) scale(1.1) translate(-48 -19)"
        />
        <polygon
          className="logo-tech-a-fill"
          points="48,5 35,33 61,33"
          style={{ fill: `url(#${gradId})` }}
        />
        <polygon className="logo-tech-a-stroke" points="48,5 35,33 61,33" />
      </g>

      <text
        x="48"
        y="24.5"
        textAnchor="middle"
        className="logo-tech-code"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="7.2"
        fontWeight="700"
        letterSpacing="-0.04em"
      >
        {"</>"}
      </text>

      <rect className="logo-tech-primary" x="69" y="11" width="5" height="22" rx="1.2" />
      <rect className="logo-tech-accent" x="67.5" y="4.5" width="8" height="5.5" rx="1.4" />
    </svg>
  );
}
