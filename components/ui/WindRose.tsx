"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type WindRoseProps = {
  size?: number;
  variant?: "hero" | "watermark" | "compact";
  className?: string;
  heading?: number;
};

function svgCoord(value: number) {
  return value.toFixed(3);
}

export function WindRose({
  size = 320,
  variant = "hero",
  className,
  heading,
}: WindRoseProps) {
  const uid = useId();
  const ticks = Array.from({ length: 72 }, (_, index) => index);

  return (
    <div
      className={cn(
        "text-brass",
        variant === "watermark" ? "pointer-events-none" : "relative",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="rose-pulse absolute inset-[8%] rounded-full border border-steel/40" />
      <div className="rose-pulse-delay absolute inset-[18%] rounded-full border border-brass/32" />

      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id={`${uid}-hub`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4b57a" />
            <stop offset="55%" stopColor="#c59d5f" />
            <stop offset="100%" stopColor="#8b6b3f" />
          </radialGradient>
          <linearGradient id={`${uid}-gold`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e2c27a" />
            <stop offset="100%" stopColor="#8b6b3f" />
          </linearGradient>
          <linearGradient id={`${uid}-steel`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d5e4f0" />
            <stop offset="100%" stopColor="#6d8499" />
          </linearGradient>
          <linearGradient id={`${uid}-radar`} x1="0.5" y1="0.5" x2="0.85" y2="0.1">
            <stop offset="0%" stopColor="rgba(168,192,216,0.38)" />
            <stop offset="100%" stopColor="rgba(168,192,216,0)" />
          </linearGradient>
        </defs>

        <g className="rose-spin-slow origin-center">
          <circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.34"
            strokeWidth="0.7"
          />
          <circle
            cx="100"
            cy="100"
            r="86"
            fill="none"
            stroke="#c3d4e6"
            strokeOpacity="0.26"
            strokeWidth="0.5"
            strokeDasharray="2 5"
          />
          {ticks.map((tick) => {
            const angle = (tick * 5 * Math.PI) / 180;
            const inner = tick % 9 === 0 ? 78 : tick % 3 === 0 ? 81 : 83;
            const x1 = svgCoord(100 + Math.sin(angle) * inner);
            const y1 = svgCoord(100 - Math.cos(angle) * inner);
            const x2 = svgCoord(100 + Math.sin(angle) * 91);
            const y2 = svgCoord(100 - Math.cos(angle) * 91);
            return (
              <line
                key={tick}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={tick % 9 === 0 ? "#c59d5f" : "#c3d4e6"}
                strokeOpacity={tick % 9 === 0 ? 0.82 : 0.42}
                strokeWidth={tick % 9 === 0 ? 1.1 : 0.5}
              />
            );
          })}
        </g>

        <g className="rose-spin-radar origin-center">
          <path
            d="M100 100 L118 18 A82 82 0 0 1 168 48 Z"
            fill={`url(#${uid}-radar)`}
          />
          <line
            x1="100"
            y1="100"
            x2="128"
            y2="20"
            stroke="#c3d4e6"
            strokeOpacity="0.82"
            strokeWidth="0.9"
          />
        </g>

        <g className="rose-spin-circuit origin-center" opacity="0.72">
          <path
            d="M132 58 H150 V72 H164"
            fill="none"
            stroke="#c3d4e6"
            strokeWidth="0.8"
          />
          <path
            d="M146 128 H168 V146"
            fill="none"
            stroke="#c3d4e6"
            strokeWidth="0.8"
          />
          <circle cx="150" cy="58" r="1.6" fill="#c3d4e6" />
          <circle cx="164" cy="72" r="1.6" fill="#c3d4e6" />
          <circle cx="168" cy="146" r="1.6" fill="#c3d4e6" />
          <circle cx="146" cy="128" r="1.4" fill="#6ec8e8" className="node-pulse" />
        </g>

        <g
          className={
            heading == null
              ? "rose-seek origin-center"
              : "rose-heading origin-center"
          }
          style={
            heading == null
              ? undefined
              : { transform: `rotate(${heading}deg)` }
          }
        >
          <path
            d="M100 22 L106.2 92 L100 100 L93.8 92 Z"
            fill={`url(#${uid}-gold)`}
          />
          <path
            d="M100 178 L93.8 108 L100 100 L106.2 108 Z"
            fill={`url(#${uid}-gold)`}
            fillOpacity="0.55"
          />
          <path
            d="M178 100 L108 106.2 L100 100 L108 93.8 Z"
            fill={`url(#${uid}-steel)`}
          />
          <path
            d="M22 100 L92 93.8 L100 100 L92 106.2 Z"
            fill={`url(#${uid}-steel)`}
            fillOpacity="0.5"
          />
          <path
            d="M150 50 L108 92 L100 100 L96 96 Z"
            fill={`url(#${uid}-gold)`}
            fillOpacity="0.35"
          />
          <path
            d="M50 150 L92 108 L100 100 L104 104 Z"
            fill={`url(#${uid}-steel)`}
            fillOpacity="0.28"
          />
          <path
            d="M150 150 L108 108 L100 100 L104 96 Z"
            fill={`url(#${uid}-steel)`}
            fillOpacity="0.32"
          />
          <path
            d="M50 50 L92 92 L100 100 L96 104 Z"
            fill={`url(#${uid}-gold)`}
            fillOpacity="0.22"
          />
        </g>

        <circle cx="100" cy="100" r="7" fill="var(--ink)" />
        <circle cx="100" cy="100" r="4.2" fill={`url(#${uid}-hub)`} />
        <circle
          cx="100"
          cy="100"
          r="2.1"
          fill="none"
          stroke="#c3d4e6"
          strokeWidth="0.7"
        />

        {variant !== "watermark" ? (
          <>
            <text
              x="100"
              y="16"
              textAnchor="middle"
              fill="#c59d5f"
              fontSize="8"
              letterSpacing="1.5"
            >
              N
            </text>
            <text
              x="186"
              y="104"
              textAnchor="middle"
              fill="#c3d4e6"
              fontSize="7"
            >
              E
            </text>
            <text
              x="100"
              y="194"
              textAnchor="middle"
              fill="#c3d4e6"
              fontSize="7"
            >
              S
            </text>
            <text
              x="14"
              y="104"
              textAnchor="middle"
              fill="#c3d4e6"
              fontSize="7"
            >
              W
            </text>
          </>
        ) : null}
      </svg>
    </div>
  );
}
