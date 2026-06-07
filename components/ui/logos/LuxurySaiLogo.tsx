import { logoLuxuryGradient } from "@/lib/logo";

type LuxurySaiLogoProps = {
  className?: string;
  icon?: boolean;
};

const serif = "var(--font-cormorant), Cormorant Garamond, Georgia, serif";

function LuxuryDefs({ gradId, icon }: { gradId: string; icon: boolean }) {
  return (
    <defs>
      <linearGradient id={gradId} x1="8%" y1="0%" x2="92%" y2="100%">
        <stop offset="0%" stopColor="#f7edd8" />
        <stop offset="28%" stopColor={logoLuxuryGradient.start} />
        <stop offset="55%" stopColor={logoLuxuryGradient.mid} />
        <stop offset="82%" stopColor="#a88758" />
        <stop offset="100%" stopColor={logoLuxuryGradient.end} />
      </linearGradient>
      <linearGradient id={`${gradId}-shine`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
        <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
      </linearGradient>
      {icon ? (
        <linearGradient id="luxury-icon-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#182232" />
          <stop offset="100%" stopColor="#0c1018" />
        </linearGradient>
      ) : (
        <filter id="luxury-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#0c1018" floodOpacity="0.35" />
        </filter>
      )}
    </defs>
  );
}

/** Interconnected serif SAI — warm gold with flowing S-to-A ligature */
export function LuxurySaiLogo({ className = "", icon = false }: LuxurySaiLogoProps) {
  const gradId = icon ? "luxury-icon-grad" : "luxury-grad";

  if (icon) {
    return (
      <svg
        viewBox="0 0 32 32"
        role="img"
        aria-label="SAI"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <LuxuryDefs gradId={gradId} icon />
        <rect width="32" height="32" rx="7" fill="url(#luxury-icon-bg)" />
        <g fill={`url(#${gradId})`}>
          <text
            x="9"
            y="24"
            fontFamily={serif}
            fontSize="22"
            fontWeight="500"
            fontStyle="italic"
          >
            S
          </text>
          <path
            d="M8 23.5C12 25.5 16 25 19 23"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 94 44"
      role="img"
      aria-label="SAI"
      className={`site-logo-luxury ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <LuxuryDefs gradId={gradId} icon={false} />
      <g filter="url(#luxury-shadow)" fill={`url(#${gradId})`}>
        {/* Italic S — anchor of the mark */}
        <text
          x="0"
          y="35"
          fontFamily={serif}
          fontSize="40"
          fontWeight="500"
          fontStyle="italic"
        >
          S
        </text>

        {/* Swash connecting S into A */}
        <path
          d="M5 37.5C16 41 28 39.5 36 36.5C42 34.5 46 31.5 48 28.5"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* A — open crossbar, shares base with swash */}
        <path d="M33 36.5L41.5 5.5L49.5 5.5L58 36.5H52.5L50 27H40L37.5 36.5H33ZM41.5 21.5H48.5L45 10.5L41.5 21.5Z" />

        {/* I */}
        <rect x="62.5" y="10" width="5" height="26.5" rx="0.5" />
        <circle cx="65" cy="5.5" r="4.2" />
      </g>

      {/* Top-edge metallic highlight */}
      <g fill={`url(#${gradId}-shine)`} opacity="0.55">
        <text
          x="0"
          y="35"
          fontFamily={serif}
          fontSize="40"
          fontWeight="500"
          fontStyle="italic"
        >
          S
        </text>
        <path d="M33 36.5L41.5 5.5L49.5 5.5L58 36.5H52.5L50 27H40L37.5 36.5H33ZM41.5 21.5H48.5L45 10.5L41.5 21.5Z" />
        <rect x="62.5" y="10" width="5" height="26.5" rx="0.5" />
        <circle cx="65" cy="5.5" r="4.2" />
      </g>
    </svg>
  );
}
