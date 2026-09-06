import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/locale";

export async function PositioningSection() {
  const t = await getDictionary();

  return (
    <section className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="border border-white/16 bg-card/80 px-6 py-12 text-center sm:px-10 lg:px-16">
            <h2 className="font-display mx-auto max-w-4xl text-3xl leading-tight text-foreground sm:text-5xl">
              <span className="block">{t.positioning.title}</span>
              <span className="mt-2 block text-brass-soft">
                {t.positioning.titleLine2}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {t.positioning.text}
            </p>
            <p className="mt-10 font-mono text-[0.72rem] tracking-[0.16em] text-steel uppercase">
              {t.positioning.layers.join("  +  ")}
            </p>
            <p className="mt-4 font-display text-xl text-foreground">
              ↓ {t.positioning.result}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
