import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { routes } from "@/config/routes";
import { getWhatsAppHref, site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/locale";

export async function FinalCtaSection() {
  const t = await getDictionary();
  const whatsapp = getWhatsAppHref(t.whatsapp.message);

  return (
    <section className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden border border-white/16 bg-card/80 px-6 py-14 text-center backdrop-blur-[2px] sm:px-10">
            <div className="relative">
              <h2 className="font-display mx-auto max-w-3xl text-3xl leading-tight sm:text-5xl">
                <span className="block">{t.finalCta.title}</span>
                <span className="mt-1 block">{t.finalCta.titleLine2}</span>
              </h2>
              <p className="mt-5 text-lg text-muted">
                {t.finalCta.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={routes.contact}>
                  {t.common.transformProcess}
                </Button>
                <Button
                  href={whatsapp}
                  variant="secondary"
                  external={Boolean(site.whatsapp)}
                >
                  {t.common.talkToStancomb}
                </Button>
              </div>
              <p className="mt-8 font-display text-brass-soft">
                From Compass to Code.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
