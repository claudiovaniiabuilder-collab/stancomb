"use client";

import { getWhatsAppHref, site } from "@/config/site";

export function FloatingWhatsApp({
  label,
  message,
}: {
  label: string;
  message: string;
}) {
  const href = getWhatsAppHref(message);
  const configured = Boolean(site.whatsapp);

  return (
    <a
      href={href}
      target={configured ? "_blank" : undefined}
      rel={configured ? "noopener noreferrer" : undefined}
      className="print-hide fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 inline-flex min-h-11 max-w-[calc(100vw-5.5rem)] items-center gap-2 border border-brass/45 bg-card/94 px-3 text-xs text-foreground shadow-[0_0_18px_rgba(228,188,114,0.18)] backdrop-blur-md transition-colors hover:border-spark/50 sm:right-6 sm:bottom-6 sm:min-h-12 sm:max-w-none sm:px-4 sm:text-sm"
      aria-label={label}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
      <span className="truncate">{label}</span>
    </a>
  );
}
