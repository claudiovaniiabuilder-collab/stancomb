import type { Metadata } from "next";
import { ProductFeature } from "@/components/products/ProductFeature";
import {
  WorsleyAiScreen,
  WorsleyAnalyticsScreen,
  WorsleyAssetsScreen,
  WorsleyTowerScreen,
  WorsleyTrackingScreen,
} from "@/components/products/WorsleyScreens";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/config/products";
import { routes } from "@/config/routes";
import { getSiteUrl } from "@/config/site";
import { getDictionary } from "@/lib/i18n/locale";

const product = products.worsley;
const screens = [
  <WorsleyTowerScreen key="tower" />,
  <WorsleyAssetsScreen key="assets" />,
  <WorsleyTrackingScreen key="tracking" />,
  <WorsleyAnalyticsScreen key="analytics" />,
  <WorsleyAiScreen key="ai" />,
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  const url = `${getSiteUrl()}${routes.worsley}`;

  return {
    title: { absolute: t.worsley.seoTitle },
    description: t.worsley.metaDescription,
    alternates: { canonical: routes.worsley },
    openGraph: {
      title: t.worsley.seoTitle,
      description: t.worsley.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function WorsleyPage() {
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
            {t.products.worsley.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-xl text-foreground">
            {t.worsley.headline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {t.worsley.extra}
          </p>
          <p className="mt-4 max-w-2xl text-sm text-brass-soft">
            {t.products.worsley.benefit}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.products.worsley.groups.map((group) => (
            <div key={group.title} className="border border-white/16 bg-card p-4">
              <p className="font-mono text-[0.62rem] tracking-[0.16em] text-brass uppercase">
                {group.title}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={routes.contact}>{t.common.transformProcess}</Button>
          <Button href={routes.home} variant="secondary">
            {t.common.backHome}
          </Button>
        </div>

        <section className="mt-20 border-t border-white/16 pt-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] tracking-[0.2em] text-brass uppercase">
              {t.worsley.objectiveEyebrow}
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl text-foreground">
              {t.worsley.objectiveTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              {t.worsley.objectiveText}
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {t.worsley.objectives.map((item, index) => (
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
              {t.worsley.seeTitle}
            </h2>
          </Reveal>
          {t.worsley.features.map((feature, index) => (
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
