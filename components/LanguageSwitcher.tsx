"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/app/actions/locale";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";

const options: Locale[] = ["pt", "en"];

export function LanguageSwitcher({
  locale,
  label,
  variant = "boxed",
  className,
}: {
  locale: Locale;
  label: string;
  variant?: "boxed" | "nav";
  className?: string;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function select(next: Locale) {
    if (next === locale || pending) {
      return;
    }

    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  }

  if (variant === "nav") {
    return (
      <div
        role="group"
        aria-label={label}
        className={cn(
          "inline-flex items-center gap-6 xl:gap-7",
          pending && "opacity-70",
          className,
        )}
      >
        {options.map((option) => {
          const active = option === locale;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => select(option)}
              className={cn(
                "text-[0.86rem] uppercase transition-colors",
                active
                  ? "text-foreground"
                  : "text-muted hover:text-foreground",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "inline-flex border border-white/18 font-mono text-[0.68rem] tracking-[0.16em]",
        pending && "opacity-70",
      )}
    >
      {options.map((option) => {
        const active = option === locale;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => select(option)}
            className={cn(
              "min-h-11 min-w-11 px-2.5 uppercase transition-colors",
              active
                ? "bg-brass text-ink"
                : "text-muted hover:text-foreground",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
