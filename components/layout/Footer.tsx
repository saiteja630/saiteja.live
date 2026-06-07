import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

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

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-end">
          {site.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="social-link transition"
            >
              <img
                src={item.iconUrl}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
