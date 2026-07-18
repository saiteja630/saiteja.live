type UmamiTracker = {
  track: (
    event: string,
    data?: Record<string, string | number | boolean>,
  ) => void;
};

declare global {
  interface Window {
    umami?: UmamiTracker;
  }
}

/** Fire a custom Umami event when the tracker is available. Safe no-op otherwise. */
export function trackEvent(
  name: string,
  data?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  window.umami?.track(name, data);
}
