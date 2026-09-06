import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { routes } from "@/config/routes";
import { getContactChannels, site } from "@/config/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

const hrefByKey = {
  solutions: routes.solutions,
  products: routes.products,
  results: routes.results,
  process: routes.process,
  technology: routes.technology,
  about: routes.about,
  contact: routes.contact,
} as const;

export function Footer({
  locale,
  nav,
  copy,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  copy: Dictionary["footer"];
}) {
  const channels = getContactChannels();

  return (
    <footer className="border-t border-brass/20 bg-[#141b24]/90 pb-24 lg:pb-10">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo compact className="h-16 sm:h-[4.5rem]" />
            <p className="mt-3 text-sm text-muted">{site.descriptor}</p>
            <p className="mt-5 font-display text-xl text-brass-soft">
              {site.tagline}
            </p>
            <div className="mt-6">
              <LanguageSwitcher locale={locale} label={nav.language} />
            </div>
          </div>
          <div>
            <p className="mb-4 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">
              {copy.products}
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href={routes.worsley} className="hover:text-foreground">
                  Worsley
                </Link>
              </li>
              <li>
                <Link href={routes.wind} className="hover:text-foreground">
                  Wind
                </Link>
              </li>
              <li>
                <Link href="/#labs" className="hover:text-foreground">
                  STANCOMB Labs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">
              {copy.navigation}
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href={routes.home} className="hover:text-foreground">
                  {copy.home}
                </Link>
              </li>
              {nav.items.map((item) => (
                <li key={item.key}>
                  <Link
                    href={hrefByKey[item.key as keyof typeof hrefByKey]}
                    className="hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">
              {copy.contact}
            </p>
            <ul className="space-y-3 text-sm text-muted">
              {channels.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    className="hover:text-foreground"
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href={routes.contact} className="hover:text-foreground">
                  {copy.formLink}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/16 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} STANCOMB Technology & Systems</p>
          <p className="font-mono tracking-[0.16em] uppercase">
            From Compass to Code.
          </p>
        </div>
      </Container>
    </footer>
  );
}
