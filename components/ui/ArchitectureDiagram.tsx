"use client";

import { Fragment } from "react";
import { m } from "framer-motion";
import { site } from "@/lib/site";

export function ArchitectureDiagram() {
  const layers = site.architectureLayers;

  return (
    <div
      className="architecture-diagram"
      aria-label="Enterprise commerce architecture blueprint"
    >
      <div
        className="blueprint-grid absolute inset-0 rounded-2xl"
        style={{ opacity: "var(--diagram-bg-opacity)" }}
      />

      <div className="architecture-corners" aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="architecture-spine" aria-hidden>
        <div className="architecture-spine-line" />
      </div>

      <div className="architecture-layers">
        {layers.map((layer, layerIndex) => (
          <Fragment key={layer.id}>
            <m.div
              className="architecture-layer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.15 + layerIndex * 0.1,
              }}
            >
              <p className="architecture-layer-title">
                {layer.label.toUpperCase()}
              </p>
              <div className="architecture-layer-modules">
                {layer.modules.map((mod) => (
                  <div
                    key={mod}
                    className="architecture-module"
                    data-long={mod.length > 14 ? "" : undefined}
                  >
                    {mod}
                  </div>
                ))}
              </div>
            </m.div>

            {layerIndex < layers.length - 1 && (
              <div className="architecture-connector" aria-hidden>
                <span
                  className="architecture-spine-dot diagram-pulse-dot"
                  style={{ animationDelay: `${layerIndex * 0.5}s` }}
                />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <m.div
        className="architecture-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Composable Architecture</span>
        <span className="text-[var(--accent)]">
          {layers.length} layers · {site.platforms.length} platforms
        </span>
      </m.div>
    </div>
  );
}
