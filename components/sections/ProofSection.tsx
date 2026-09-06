import { WindBoardScreen } from "@/components/products/WindScreens";
import { WorsleyTowerScreen } from "@/components/products/WorsleyScreens";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/config/products";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/locale";

export async function ProofSection() {
  const t = await getDictionary();

  return (
    <section id="resultados" className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.proof.eyebrow}
            title={t.proof.title}
            description={t.proof.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="border border-white/16 bg-card p-4 sm:p-5">
              <p className="mb-4 font-mono text-[0.62rem] tracking-[0.18em] text-brass uppercase">
                {products.worsley.name} · {products.worsley.descriptor}
              </p>
              <figure>
                <div className="max-h-72 overflow-hidden">
                  <WorsleyTowerScreen />
                </div>
                <figcaption className="sr-only">
                  {products.worsley.name} control tower
                </figcaption>
              </figure>
              <div className="mt-5">
                <Button href={routes.worsley} variant="secondary">
                  {t.products.knowWorsley}
                </Button>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="border border-white/16 bg-card p-4 sm:p-5">
              <p className="mb-4 font-mono text-[0.62rem] tracking-[0.18em] text-brass uppercase">
                {products.wind.name} · {products.wind.descriptor}
              </p>
              <figure>
                <div className="max-h-72 overflow-hidden">
                  <WindBoardScreen />
                </div>
                <figcaption className="sr-only">
                  {products.wind.name} kanban
                </figcaption>
              </figure>
              <div className="mt-5">
                <Button href={routes.wind} variant="secondary">
                  {t.products.knowWind}
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
