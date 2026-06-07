"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/10 px-4 py-10 sm:px-6"
      style={{ paddingBottom: "calc(2.5rem + var(--safe-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm leading-relaxed text-white/70 md:text-left"
        >
          <div>© {year} Created by {site.name}.</div>
          <div>All rights reserved.</div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-end">
          {site.social.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="transition"
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
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
