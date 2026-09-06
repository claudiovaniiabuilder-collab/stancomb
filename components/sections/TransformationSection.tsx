import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/locale";

export async function TransformationSection() {
  const t = await getDictionary();

  return (
    <section className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.transformation.eyebrow}
            title={t.transformation.title}
          />
        </Reveal>
        <Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="border border-white/16 bg-card/85 p-6 backdrop-blur-[2px] sm:p-8">
              <p className="font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">
                {t.transformation.before}
              </p>
              <ul className="mt-6 space-y-3 text-foreground">
                {t.transformation.beforeItems.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 py-2">
              <span className="text-muted" aria-hidden>
                ↓
              </span>
              <div className="flex flex-col items-center gap-2 border border-brass/35 bg-brass-dim px-5 py-5">
                <Logo compact className="h-12 sm:h-14" />
                <p className="font-display text-sm tracking-[0.18em]">
                  STANCOMB
                </p>
              </div>
              <span className="text-muted" aria-hidden>
                ↓
              </span>
            </div>
            <div className="border border-brass/25 bg-card/85 p-6 backdrop-blur-[2px] sm:p-8">
              <p className="font-mono text-[0.68rem] tracking-[0.22em] text-brass uppercase">
                {t.transformation.after}
              </p>
              <ul className="mt-6 space-y-3 text-foreground">
                {t.transformation.afterItems.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <p className="mt-10 text-center text-lg text-muted">
          {t.transformation.message}
        </p>
        <p className="font-display mt-3 text-center text-2xl text-foreground sm:text-3xl">
          {t.transformation.messageStrong}
        </p>
      </Container>
    </section>
  );
}
