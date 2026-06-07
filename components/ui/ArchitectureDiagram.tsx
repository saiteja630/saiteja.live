"use client";

import { m } from "framer-motion";
import { site } from "@/lib/site";

const LAYER_HEIGHT = 52;
const LAYER_GAP = 8;
const BOX_X = 16;
const BOX_W = 368;
const START_Y = 28;
const MODULE_PAD = 10;
const MODULE_GAP = 8;
const LABEL_HEIGHT = 18;
const MODULE_HEIGHT = 20;

function getModuleLayout(moduleCount: number) {
  const innerW = BOX_W - MODULE_PAD * 2 - MODULE_GAP * (moduleCount - 1);
  const modW = innerW / moduleCount;
  return { modW, moduleCount };
}

export function ArchitectureDiagram() {
  const layers = site.architectureLayers;
  const totalHeight =
    START_Y + layers.length * (LAYER_HEIGHT + LAYER_GAP) + 20;
  const spineEnd =
    START_Y + layers.length * (LAYER_HEIGHT + LAYER_GAP) - LAYER_GAP;

  const pulsePoints = layers
    .slice(0, -1)
    .map(
      (_, i) =>
        START_Y + (i + 1) * (LAYER_HEIGHT + LAYER_GAP) - LAYER_GAP / 2,
    );

  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div
        className="blueprint-grid absolute inset-0 rounded-2xl"
        style={{ opacity: "var(--diagram-bg-opacity)" }}
      />

      <svg
        viewBox={`0 0 400 ${totalHeight}`}
        className="relative h-auto w-full"
        aria-label="Enterprise commerce architecture blueprint"
      >
        <defs>
          <linearGradient id="layerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--diagram-layer-start)" />
            <stop offset="100%" stopColor="var(--diagram-layer-end)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <m.line
          x1="200"
          y1={START_Y}
          x2="200"
          y2={spineEnd}
          stroke="var(--diagram-spine)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {layers.map((layer, layerIndex) => {
          const rowY = START_Y + layerIndex * (LAYER_HEIGHT + LAYER_GAP);
          const { modW } = getModuleLayout(layer.modules.length);
          const modY =
            rowY +
            LABEL_HEIGHT +
            (LAYER_HEIGHT - LABEL_HEIGHT - MODULE_HEIGHT) / 2;

          return (
            <g key={layer.id}>
              <m.rect
                x={BOX_X}
                y={rowY}
                width={BOX_W}
                height={LAYER_HEIGHT}
                rx="4"
                fill="url(#layerGrad)"
                stroke="var(--diagram-layer-stroke)"
                strokeWidth="1"
                initial={{ opacity: 0, scaleX: 0.85 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + layerIndex * 0.1,
                }}
                style={{
                  transformOrigin: `${BOX_X}px ${rowY + LAYER_HEIGHT / 2}px`,
                }}
              />

              <m.foreignObject
                x={BOX_X}
                y={rowY}
                width={BOX_W}
                height={LABEL_HEIGHT}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + layerIndex * 0.1 }}
              >
                <div className="architecture-layer-label">
                  {layer.label.toUpperCase()}
                </div>
              </m.foreignObject>

              {layer.modules.map((mod, modIndex) => {
                const modX =
                  BOX_X + MODULE_PAD + modIndex * (modW + MODULE_GAP);
                const modFontSize = mod.length > 14 ? 7 : 8;

                return (
                  <g key={mod}>
                    <m.rect
                      x={modX}
                      y={modY}
                      width={modW}
                      height={MODULE_HEIGHT}
                      rx="2"
                      fill="var(--diagram-module-fill)"
                      stroke="var(--diagram-module-stroke)"
                      strokeWidth="0.75"
                      initial={{ opacity: 0, y: modY + 6 }}
                      animate={{ opacity: 1, y: modY }}
                      transition={{
                        duration: 0.35,
                        delay: 0.4 + layerIndex * 0.1 + modIndex * 0.06,
                      }}
                    />
                    <m.foreignObject
                      x={modX}
                      y={modY}
                      width={modW}
                      height={MODULE_HEIGHT}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 0.5 + layerIndex * 0.1 + modIndex * 0.06,
                      }}
                    >
                      <div
                        className="architecture-module-label"
                        style={{ fontSize: `${modFontSize}px` }}
                      >
                        {mod}
                      </div>
                    </m.foreignObject>
                  </g>
                );
              })}

              {layerIndex < layers.length - 1 && (
                <m.line
                  x1="200"
                  y1={rowY + LAYER_HEIGHT}
                  x2="200"
                  y2={rowY + LAYER_HEIGHT + LAYER_GAP}
                  stroke="var(--diagram-connector)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.55 + layerIndex * 0.1,
                  }}
                />
              )}
            </g>
          );
        })}

        {[
          [12, 12],
          [388, 12],
          [12, totalHeight - 12],
          [388, totalHeight - 12],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <line
              x1={cx}
              y1={cy}
              x2={cx + (cx < 200 ? 10 : -10)}
              y2={cy}
              stroke="var(--diagram-corner)"
              strokeWidth="1"
            />
            <line
              x1={cx}
              y1={cy}
              x2={cx}
              y2={cy + (cy < totalHeight / 2 ? 10 : -10)}
              stroke="var(--diagram-corner)"
              strokeWidth="1"
            />
          </g>
        ))}

        {pulsePoints.map((cy, i) => (
          <circle
            key={cy}
            cx="200"
            cy={cy}
            r="2"
            fill="var(--diagram-pulse)"
            filter="url(#glow)"
            className="diagram-pulse-dot"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>

      <m.div
        className="mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.25em] sm:text-[0.65rem]"
        style={{ color: "var(--diagram-footer)" }}
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
