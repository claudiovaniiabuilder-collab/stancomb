import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/locale";

export async function StancombJourney() {
  const t = await getDictionary();

  return (
    <section id="metodo" className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.journey.eyebrow}
            title={t.journey.title}
            description={t.journey.description}
          />
        </Reveal>
        <Reveal>
          <ol className="mt-10 flex flex-col gap-0 border border-white/16 bg-card/70 lg:flex-row lg:items-stretch">
            {t.journey.steps.map((step, index) => (
              <li
                key={step.label}
                className="relative flex flex-1 flex-col border-white/12 px-5 py-5 lg:border-r lg:last:border-r-0 max-lg:border-b max-lg:last:border-b-0"
              >
                <span className="font-mono text-[0.58rem] text-brass">
                  0{index + 1}
                </span>
                <p className="mt-2 font-display text-lg tracking-[0.08em] text-foreground uppercase">
                  {step.label}
                </p>
                <p className="mt-1 text-sm text-muted">{step.micro}</p>
                {index < t.journey.steps.length - 1 ? (
                  <span
                    className="pointer-events-none absolute top-1/2 right-[-0.35rem] hidden text-brass lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
