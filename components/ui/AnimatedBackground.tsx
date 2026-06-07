"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="blueprint-grid-animated-slow absolute inset-[-64px]" />
      <div className="blueprint-grid-animated absolute inset-[-32px]" />
      <div className="absolute inset-0 bg-mesh" />
      <motion.div
        className="orb orb-1"
        animate={{ x: [0, 20, -15, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-2"
        animate={{ x: [0, -25, 20, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="noise-overlay" />
    </div>
  );
}
