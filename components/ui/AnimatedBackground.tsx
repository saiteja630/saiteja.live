export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="animated-background pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="blueprint-grid-slow absolute inset-0" />
      <div className="blueprint-grid absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-mesh" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="noise-overlay" />
    </div>
  );
}
