import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/locale";

export async function ProcessSection() {
  const t = await getDictionary();

  return (
    <section
      id="como-trabalhamos"
      className="border-t border-white/16 py-16 lg:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.process.eyebrow}
            title={t.process.title}
          />
        </Reveal>
        <ol className="relative mt-12 grid gap-0 md:grid-cols-5">
          <span
            className="pointer-events-none absolute top-7 right-8 left-8 hidden h-px bg-brass/40 md:block"
            aria-hidden
          />
          {t.process.steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.04}>
              <li className="relative flex gap-4 border-b border-white/12 py-5 md:flex-col md:border-b-0 md:px-3 md:py-0">
                <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-brass/50 bg-background font-mono text-[0.68rem] text-brass">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-base tracking-wide text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
