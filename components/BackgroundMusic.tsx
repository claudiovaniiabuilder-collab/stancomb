"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const TRACK_SRC = "https://assets.mixkit.co/music/464/464.mp3";
const STORAGE_KEY = "stancomb-score";
const VOLUME = 0.52;

export function BackgroundMusic({
  playLabel,
  pauseLabel,
  title,
}: {
  playLabel: string;
  pauseLabel: string;
  title: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.volume = VOLUME;

    if (playing) {
      audio.pause();
      window.localStorage.setItem(STORAGE_KEY, "off");
      setPlaying(false);
      return;
    }

    try {
      audio.currentTime = 0;
      await audio.play();
      window.localStorage.setItem(STORAGE_KEY, "on");
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACK_SRC}
        loop
        preload="auto"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? pauseLabel : playLabel}
        title={title}
        className="print-hide fixed bottom-4 left-4 z-40 inline-flex min-h-12 items-center gap-2 border border-brass/45 bg-card/95 px-4 font-display text-[0.72rem] tracking-[0.16em] text-brass-soft uppercase backdrop-blur-md transition-colors hover:border-brass hover:text-foreground sm:bottom-6 sm:left-6"
      >
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            playing
              ? "node-pulse bg-brass shadow-[0_0_8px_rgba(197,157,95,0.8)]"
              : "bg-muted",
          )}
          aria-hidden
        />
        {playing ? pauseLabel : playLabel}
      </button>
    </>
  );
}
