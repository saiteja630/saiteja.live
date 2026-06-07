"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ArchitectureDiagram = dynamic(
  () =>
    import("@/components/ui/ArchitectureDiagram").then(
      (mod) => mod.ArchitectureDiagram,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="mx-auto h-[420px] w-full max-w-[440px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]"
        aria-hidden="true"
      />
    ),
  },
);

export function DeferredArchitectureDiagram() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const show = () => setReady(true);

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(show, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(show, 200);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    return (
      <div
        className="mx-auto h-[420px] w-full max-w-[440px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]"
        aria-hidden="true"
      />
    );
  }

  return <ArchitectureDiagram />;
}
