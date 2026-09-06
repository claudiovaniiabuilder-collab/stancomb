import type { Metadata } from "next";
import { ProductFeature } from "@/components/products/ProductFeature";
import {
  WindActionsScreen,
  WindAlertsScreen,
  WindBoardScreen,
  WindDashboardScreen,
} from "@/components/products/WindScreens";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/config/products";
import { routes } from "@/config/routes";
import { getSiteUrl } from "@/config/site";
import { getDictionary } from "@/lib/i18n/locale";

const product = products.wind;
const screens = [
  <WindBoardScreen key="board" />,
  <WindDashboardScreen key="dashboard" />,
  <WindActionsScreen key="actions" />,
  <WindAlertsScreen key="alerts" />,
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  const url = `${getSiteUrl()}${routes.wind}`;

  return {
    title: { absolute: t.wind.seoTitle },
    description: t.wind.metaDescription,
    alternates: { canonical: routes.wind },
    openGraph: {
      title: t.wind.seoTitle,
      description: t.wind.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function WindPage() {
  const t = await getDictionary();

  return (
    <main id="conteudo" className="pt-32 pb-24">
      <Container>
        <Reveal>
          <p className="font-mono text-[0.68rem] tracking-[0.22em] text-brass uppercase">
            {t.common.productEyebrow}
          </p>
          <h1 className="font-display mt-4 text-4xl sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-steel">{product.descriptor}</p>
          <p className="mt-1 font-mono text-[0.62rem] tracking-[0.18em] text-steel uppercase">
            {product.signature}
          </p>
          <p className="mt-2 font-display text-xl text-brass-soft">
            {t.products.wind.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-xl text-foreground">
            {t.wind.headline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {t.wind.extra}
          </p>
          <p className="mt-4 max-w-2xl text-sm text-brass-soft">
            {t.products.wind.benefit}
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {t.products.wind.flow.map((step, index) => (
            <span key={step} className="flex items-center gap-2">
              <span className="border border-white/16 px-3 py-2 font-mono text-[0.7rem] text-steel uppercase">
                {step}
              </span>
              {index < t.products.wind.flow.length - 1 ? (
                <span className="text-brass" aria-hidden>
                  →
                </span>
              ) : null}
            </span>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {t.products.wind.benefits.map((item) => (
            <li
              key={item}
              className="border border-white/16 px-3 py-2 font-mono text-[0.7rem] text-steel uppercase"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={routes.contact}>{t.common.transformProcess}</Button>
          <Button href={routes.home} variant="secondary">
            {t.common.backHome}
          </Button>
        </div>

        <section className="mt-20 border-t border-white/16 pt-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] tracking-[0.2em] text-brass uppercase">
              {t.wind.objectiveEyebrow}
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl text-foreground">
              {t.wind.objectiveTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-muted">{t.wind.objectiveText}</p>
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {t.wind.objectives.map((item, index) => (
              <li
                key={item}
                className="border border-white/16 bg-card p-5 text-sm leading-relaxed text-muted"
              >
                <span className="font-mono text-[0.62rem] text-brass">
                  0{index + 1}
                </span>
                <p className="mt-2 text-foreground">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 space-y-20 border-t border-white/16 pt-16">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              {t.wind.seeTitle}
            </h2>
          </Reveal>
          {t.wind.features.map((feature, index) => (
            <ProductFeature
              key={feature.title}
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
              points={[...feature.points]}
              screen={screens[index]}
              reverse={index % 2 === 1}
            />
          ))}
        </section>
      </Container>
    </main>
  );
}
