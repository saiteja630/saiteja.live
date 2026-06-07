"use client";

import { useEffect } from "react";

function updateZoomState() {
  const scale = window.visualViewport?.scale ?? 1;
  const zoomed = Math.abs(scale - 1) > 0.02;
  document.documentElement.toggleAttribute("data-zoomed", zoomed);
}

export function ZoomMotionGuard() {
  useEffect(() => {
    updateZoomState();

    const viewport = window.visualViewport;
    viewport?.addEventListener("resize", updateZoomState);
    viewport?.addEventListener("scroll", updateZoomState);
    window.addEventListener("resize", updateZoomState);

    return () => {
      viewport?.removeEventListener("resize", updateZoomState);
      viewport?.removeEventListener("scroll", updateZoomState);
      window.removeEventListener("resize", updateZoomState);
      document.documentElement.removeAttribute("data-zoomed");
    };
  }, []);

  return null;
}
