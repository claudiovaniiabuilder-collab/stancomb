"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { CompassRose } from "@/components/ui/CompassRose";
import { routes } from "@/config/routes";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const hrefByKey = {
  solutions: routes.solutions,
  products: routes.products,
  results: routes.results,
  process: routes.process,
  technology: routes.technology,
  about: routes.about,
  contact: routes.contact,
} as const;

export function Navbar({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary["nav"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 print-hide",
        scrolled || open
          ? "border-b border-white/12 bg-background/82 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.28)]"
          : "bg-transparent",
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-ink"
      >
        {copy.skip}
      </a>
      <div className="mx-auto flex h-[4.75rem] w-full max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-10">
        <Link href={routes.home} aria-label={copy.homeAria}>
          <CompassRose
            decorative={false}
            className="h-10 w-10 sm:h-11 sm:w-11"
          />
        </Link>
        <nav
          className="hidden items-center gap-5 xl:gap-6 lg:flex"
          aria-label={copy.main}
        >
          {copy.items.map((item) => (
            <Link
              key={item.key}
              href={hrefByKey[item.key as keyof typeof hrefByKey]}
              className={cn(
                "text-[0.82rem] text-muted transition-colors hover:text-foreground",
                (item.key === "technology" || item.key === "about") &&
                  "hidden xl:inline",
              )}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher
            locale={locale}
            label={copy.language}
            variant="nav"
          />
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={routes.contact} className="min-h-11 px-5">
            {copy.cta}
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/18 text-foreground"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">
              {open ? copy.closeMenu : copy.openMenu}
            </span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-full bg-foreground transition-transform",
                  open && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-foreground transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-foreground transition-transform",
                  open && "-translate-y-[6px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-white/16 bg-background/95 px-5 py-8 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label={copy.mobile}>
            {copy.items.map((item) => (
              <Link
                key={item.key}
                href={hrefByKey[item.key as keyof typeof hrefByKey]}
                className="text-lg text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher
              locale={locale}
              label={copy.language}
              variant="nav"
              className="flex-col items-start gap-5 [&_button]:text-lg"
            />
            <Button href={routes.contact} onClick={() => setOpen(false)}>
              {copy.cta}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
