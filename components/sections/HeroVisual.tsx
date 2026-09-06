"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import { WindRose } from "@/components/ui/WindRose";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

type HeroVisualCopy = Dictionary["heroVisual"];

type HeroVisualProps = {
  copy: HeroVisualCopy;
};

const BAR_HEIGHTS = [22, 36, 52, 66, 82, 96];

export function HeroVisual({ copy }: HeroVisualProps) {
  const steps = copy.flowSteps;
  const last = Math.max(steps.length - 1, 1);
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const insightIndex = Math.min(
    Math.round((stage / last) * (copy.insights.length - 1)),
    copy.insights.length - 1,
  );
  const insight = copy.insights[insightIndex] ?? copy.insights[0];
  const morph = stage / last;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setStage(last);
      return;
    }

    if (paused) {
      return;
    }

    const delay = stage === last ? 3800 : 2100;
    const timer = window.setTimeout(() => {
      setStage((current) => (current === last ? 0 : current + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [paused, stage, last]);

  return (
    <div
      className="heritage-panel relative overflow-hidden p-5 sm:p-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <Rivet className="top-3 left-3" />
      <Rivet className="top-3 right-3" />
      <Rivet className="bottom-3 left-3" />
      <Rivet className="bottom-3 right-3" />

      <div className="relative flex items-end justify-between gap-4 border-b border-brass/40 pb-3">
        <p className="font-display text-[0.95rem] leading-tight text-foreground sm:text-[1.05rem]">
          {copy.title}
        </p>
        <span className="inline-flex shrink-0 items-center gap-2 font-display text-[0.62rem] tracking-[0.2em] text-brass uppercase">
          <span className="node-pulse h-1.5 w-1.5 rounded-full bg-brass shadow-[0_0_8px_rgba(197,157,95,0.8)]" />
          {copy.live}
        </span>
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-2">
        {copy.statusCards.map((card, index) => (
          <StatusPulseCard
            key={card.label}
            label={card.label}
            pending={copy.pending}
            done={copy.done}
            delay={`${index * 1.2}s`}
          />
        ))}
      </div>

      <div className="relative mt-5 flex flex-col items-center">
        <CompassChart
          steps={steps}
          stage={stage}
          morph={morph}
          onStage={setStage}
        />
        <p className="mt-3 font-display text-[0.58rem] tracking-[0.22em] text-brass uppercase">
          {morph < 0.45 ? copy.heritageMark : steps[stage]}
        </p>
      </div>

      <div className="heritage-log relative mt-5 px-4 py-4 sm:px-5">
        <p className="font-display text-[0.78rem] tracking-[0.18em] text-brass uppercase">
          {copy.insightLabel}
        </p>
        <p
          key={insight}
          className="hero-copy-swap mt-3 text-[0.86rem] leading-[1.75] font-normal tracking-[0.02em] text-[#e4ddd2] sm:text-[0.9rem] sm:leading-[1.8]"
          aria-live="polite"
        >
          {insight}
        </p>
      </div>
    </div>
  );
}

function CompassChart({
  steps,
  stage,
  morph,
  onStage,
}: {
  steps: readonly string[];
  stage: number;
  morph: number;
  onStage: (index: number) => void;
}) {
  const uid = useId();
  const last = Math.max(steps.length - 1, 1);
  const heading = morph * 148;
  const compassOpacity = Math.max(0, 1 - morph * 1.15);
  const chartOpacity = Math.min(1, morph * 1.2);
  const baseY = 158;
  const chartLeft = 28;
  const chartWidth = 144;
  const gap = 6;
  const barWidth = (chartWidth - gap * (steps.length - 1)) / steps.length;
  const points = steps
    .map((_, index) => {
      const visible = index <= stage ? BAR_HEIGHTS[index] ?? 22 : 10;
      const x = chartLeft + index * (barWidth + gap) + barWidth / 2;
      const y = baseY - visible;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="relative size-[216px]">
      <div
        className="absolute inset-0 origin-center"
        style={{
          opacity: compassOpacity,
          transform: `scale(${1 - morph * 0.22}) rotate(${morph * -8}deg)`,
          transition:
            "opacity 0.85s ease, transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <WindRose size={216} variant="compact" heading={heading} />
      </div>

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{
          opacity: chartOpacity,
          transition: "opacity 0.85s ease",
        }}
        role="img"
        aria-label={steps.join(" → ")}
      >
        <defs>
          <linearGradient id={`${uid}-bar`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#8b6b3f" />
            <stop offset="55%" stopColor="#d0ab6c" />
            <stop offset="100%" stopColor="#7ec994" />
          </linearGradient>
          <linearGradient id={`${uid}-line`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c3d4e6" />
            <stop offset="100%" stopColor="#7ec994" />
          </linearGradient>
        </defs>

        <circle
          cx="100"
          cy="100"
          r="94"
          fill="none"
          stroke="#c59d5f"
          strokeOpacity="0.45"
          strokeWidth="1.2"
        />
        <circle
          cx="100"
          cy="100"
          r="88"
          fill="#07080c"
          fillOpacity="0.55"
        />

        {[118, 138, 158].map((y) => (
          <line
            key={y}
            x1="26"
            y1={y}
            x2="174"
            y2={y}
            stroke="#c3d4e6"
            strokeOpacity="0.2"
            strokeWidth="0.6"
          />
        ))}

        <polyline
          points={points}
          fill="none"
          stroke={`url(#${uid}-line)`}
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{
            transition: "all 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        {steps.map((step, index) => {
          const x = chartLeft + index * (barWidth + gap);
          const target = index <= stage ? (BAR_HEIGHTS[index] ?? 22) : 10;
          const y = baseY - target;
          const active = index === stage;

          return (
            <g key={step}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={target}
                rx="1.5"
                fill={
                  index === last && index <= stage
                    ? "#7ec994"
                    : `url(#${uid}-bar)`
                }
                fillOpacity={active ? 1 : 0.78}
                className="cursor-pointer"
                style={{
                  transition: "y 0.85s cubic-bezier(0.22, 1, 0.36, 1), height 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                onClick={() => onStage(index)}
              />
              <circle
                cx={x + barWidth / 2}
                cy={y}
                r={active ? 2.4 : 1.6}
                fill={active ? "#e4c896" : "#c3d4e6"}
              />
              <text
                x={x + barWidth / 2}
                y="176"
                textAnchor="middle"
                fill={active ? "#e4c896" : "#c3d4e6"}
                fontSize="5.2"
                letterSpacing="0.4"
              >
                {step.slice(0, 3).toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Rivet({ className }: { className: string }) {
  return (
    <span
      className={cn("rivet pointer-events-none absolute z-10", className)}
      aria-hidden
    />
  );
}

function StatusPulseCard({
  label,
  pending,
  done,
  delay,
}: {
  label: string;
  pending: string;
  done: string;
  delay: string;
}) {
  return (
    <article
      className="status-card relative overflow-hidden rounded-md border px-2.5 py-2"
      style={{ "--status-delay": delay } as CSSProperties}
    >
      <p className="font-display text-[0.62rem] leading-tight tracking-[0.08em] text-foreground uppercase">
        {label}
      </p>
      <div className="relative mt-1 h-[1.05rem]">
        <span className="status-pending absolute inset-0 font-display text-[0.62rem] leading-none tracking-[0.08em] uppercase">
          {pending}
        </span>
        <span className="status-done absolute inset-0 font-display text-[0.62rem] leading-none tracking-[0.08em] uppercase">
          {done}
        </span>
      </div>
    </article>
  );
}
