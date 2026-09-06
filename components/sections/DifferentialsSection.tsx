import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/locale";

export async function DifferentialsSection() {
  const t = await getDictionary();

  return (
    <section id="sobre" className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.differentials.eyebrow}
            title={t.differentials.title}
            description={t.differentials.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.differentials.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.04}>
              <article className="h-full border border-white/16 bg-card p-5">
                <h3 className="font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {pillar.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 grid gap-8 border border-white/16 bg-card/70 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:p-8">
            <div>
              <p className="font-display text-2xl text-foreground">
                {t.differentials.closing}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {t.about.description}
              </p>
              <p className="mt-6 font-mono text-[0.72rem] tracking-[0.14em] text-steel uppercase">
                {t.differentials.formula}
              </p>
              <p className="mt-2 text-foreground">
                {t.differentials.formulaResult}
              </p>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {t.about.areas.map((area) => (
                <li
                  key={area}
                  className="border-b border-white/14 py-2 text-sm text-muted"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
