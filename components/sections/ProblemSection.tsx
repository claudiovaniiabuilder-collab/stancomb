import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/locale";

export async function ProblemSection() {
  const t = await getDictionary();

  return (
    <section id="problema" className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.problem.eyebrow}
            title={t.problem.title}
            description={t.problem.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.problem.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full border border-white/16 bg-card/85 px-5 py-6 backdrop-blur-[2px] transition-colors hover:border-brass/35 hover:bg-card-hover">
                <p className="font-mono text-[0.62rem] text-brass">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-sm tracking-[0.08em] text-foreground uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-brass/30 bg-brass-dim px-6 py-7 sm:flex-row sm:items-center">
            <p className="font-display max-w-2xl text-xl text-foreground sm:text-2xl">
              {t.problem.closing}
            </p>
            <Button href={routes.contact}>{t.common.tellProblem}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
