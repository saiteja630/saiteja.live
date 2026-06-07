"use client";

import { m, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  scale?: boolean;
};

const offsets = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  scale = false,
}: RevealProps) {
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      ...(scale ? { scale: 0.92 } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </m.div>
  );
}
