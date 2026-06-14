import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
    inlineCss: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const emptyPolyfill = path.join(__dirname, "lib/empty-polyfill.js");
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": emptyPolyfill,
        "next/dist/build/polyfills/polyfill-module": emptyPolyfill,
        "next/dist/build/polyfills/polyfill-module.js": emptyPolyfill,
      };
    }
    return config;
  },
};

export default nextConfig;
