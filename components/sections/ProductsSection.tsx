import { WindBoardScreen } from "@/components/products/WindScreens";
import { WorsleyDashboardScreen } from "@/components/products/WorsleyScreens";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/config/products";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/locale";

export async function ProductsSection() {
  const t = await getDictionary();

  return (
    <section id="produtos" className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.products.eyebrow}
            title={t.products.title}
            description={t.products.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col border border-white/16 bg-card p-5 sm:p-7">
              <figure className="relative mb-6 max-h-56 overflow-hidden border border-white/16">
                <WorsleyDashboardScreen />
                <figcaption className="sr-only">
                  {products.worsley.name} — {products.worsley.descriptor}
                </figcaption>
              </figure>
              <p className="font-mono text-[0.62rem] tracking-[0.2em] text-brass uppercase">
                {t.common.product}
              </p>
              <h3 className="mt-3 text-2xl text-foreground">
                {products.worsley.name}
              </h3>
              <p className="mt-1 text-sm text-steel">
                {products.worsley.descriptor}
              </p>
              <p className="mt-4 text-base text-foreground">
                {t.products.worsley.pain}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {t.products.worsley.summary}
              </p>
              <p className="mt-3 text-sm text-brass-soft">
                {t.products.worsley.benefit}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.products.worsley.groups.map((group) => (
                  <div key={group.title}>
                    <p className="font-mono text-[0.58rem] tracking-[0.16em] text-brass uppercase">
                      {group.title}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="border border-white/16 px-2 py-1 font-mono text-[0.62rem] text-steel uppercase"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href={routes.worsley} variant="secondary">
                  {t.products.knowWorsley}
                </Button>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col border border-white/16 bg-card p-5 sm:p-7">
              <figure className="relative mb-6 max-h-56 overflow-hidden border border-white/16">
                <WindBoardScreen />
                <figcaption className="sr-only">
                  {products.wind.name} — {products.wind.descriptor}
                </figcaption>
              </figure>
              <p className="font-mono text-[0.62rem] tracking-[0.2em] text-brass uppercase">
                {t.common.product}
              </p>
              <h3 className="mt-3 text-2xl text-foreground">
                {products.wind.name}
              </h3>
              <p className="mt-1 text-sm text-steel">
                {products.wind.descriptor}
              </p>
              <p className="mt-4 text-base text-foreground">
                {t.products.wind.pain}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {t.products.wind.summary}
              </p>
              <p className="mt-3 text-sm text-brass-soft">
                {t.products.wind.benefit}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-1.5">
                {t.products.wind.flow.map((step, index) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="border border-white/16 px-2 py-1 font-mono text-[0.62rem] text-steel uppercase">
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
              <ul className="mt-6 flex flex-wrap gap-2">
                {t.products.wind.benefits.map((item) => (
                  <li
                    key={item}
                    className="border border-white/16 px-2.5 py-1 font-mono text-[0.68rem] text-steel uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={routes.wind} variant="secondary">
                  {t.products.knowWind}
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
        <Reveal>
          <article
            id="labs"
            className="mt-4 flex flex-col justify-between gap-6 border border-dashed border-white/20 bg-background px-6 py-8 sm:flex-row sm:items-center sm:px-8"
          >
            <div>
              <p className="font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">
                {t.common.laboratory}
              </p>
              <h3 className="mt-2 text-2xl text-foreground">
                {t.products.labsName}
              </h3>
              <p className="mt-2 font-display text-brass-soft">
                {t.products.labsTagline}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {t.products.labs}
              </p>
            </div>
            <span className="inline-flex min-h-12 shrink-0 items-center border border-white/18 px-6 text-sm text-muted">
              {t.products.labsCta}
            </span>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
