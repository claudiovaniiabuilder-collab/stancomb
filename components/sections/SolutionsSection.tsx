import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/locale";

export async function SolutionsSection() {
  const t = await getDictionary();

  return (
    <section id="solucoes" className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.solutions.eyebrow}
            title={t.solutions.title}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.solutions.items.map((solution, index) => (
            <Reveal key={solution.id} delay={index * 0.05}>
              <article
                id={solution.id}
                className="flex h-full flex-col border border-white/16 bg-card p-6 transition-colors hover:border-brass/30 hover:bg-card-hover"
              >
                <p className="font-mono text-[0.62rem] text-steel">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg leading-snug text-foreground">
                  {solution.problem}
                </h3>
                <p className="mt-4 font-display text-xl text-brass-soft">
                  {solution.solution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {solution.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
