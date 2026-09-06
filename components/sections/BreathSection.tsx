import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/locale";

export async function BreathSection() {
  const t = await getDictionary();

  return (
    <section className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden border border-white/16 bg-card/80 px-6 py-16 text-center sm:px-10 lg:py-20">
            <div className="relative">
              <h2 className="font-display mx-auto max-w-4xl text-3xl leading-tight text-foreground sm:text-5xl">
                {t.breath.title}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
                {t.breath.supporting}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
