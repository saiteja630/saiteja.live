import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const linkedIn = site.social.find((item) => item.name === "LinkedIn");

  return (
    <footer
      className="border-t border-white/10 px-4 py-10 sm:px-6"
      style={{ paddingBottom: "calc(2.5rem + var(--safe-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="text-center text-sm leading-relaxed text-white/70 md:text-left">
          <div>© {year} Created by {site.name}.</div>
          <div>All rights reserved.</div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:justify-end">
          <Link
            href="/work"
            className="text-xs uppercase tracking-[0.2em] text-white/55 transition hover:text-[var(--accent)]"
            data-umami-event="footer-work"
          >
            Work
          </Link>
          <Link
            href="/#contact"
            className="text-xs uppercase tracking-[0.2em] text-white/55 transition hover:text-[var(--accent)]"
            data-umami-event="footer-contact"
          >
            Contact
          </Link>
          {linkedIn ? (
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkedIn.name}
              className="social-link transition"
              data-umami-event="social-click"
              data-umami-event-network="linkedin"
            >
              <img
                src={linkedIn.iconUrl}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
