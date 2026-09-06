import { HeroVisual } from "@/components/sections/HeroVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { routes } from "@/config/routes";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/locale";

export async function Hero() {
  const t = await getDictionary();

  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-28 lg:pb-20">
      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-7">
            <div
              className="pointer-events-none absolute inset-[-18%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(228,188,114,0.48),rgba(126,231,255,0.12)_42%,transparent_70%)] blur-2xl"
              aria-hidden
            />
            <Logo className="relative mx-auto h-52 w-auto sm:h-64 lg:h-80" />
          </div>
          <h1 className="font-display max-w-xl text-[2.15rem] leading-[1.12] font-medium text-foreground sm:text-5xl lg:text-[3.35rem]">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.supporting}
          </p>
          <p className="mt-5 max-w-lg font-mono text-[0.72rem] tracking-[0.16em] text-steel uppercase sm:text-[0.78rem]">
            {t.hero.complement}
          </p>
          <p className="mt-5 font-display text-xl text-brass-soft">
            {site.tagline}
          </p>
          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href={routes.contact}>{t.common.transformProcess}</Button>
            <Button href={routes.method} variant="secondary">
              {t.common.seeHowItWorks}
            </Button>
          </div>
          <p className="mt-7 font-mono text-[0.62rem] tracking-[0.18em] text-spark/80 uppercase">
            {t.hero.hud}
          </p>
        </div>
        <HeroVisual copy={t.heroVisual} />
      </Container>
    </section>
  );
}
