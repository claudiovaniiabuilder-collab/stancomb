import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/locale";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "OpenAI",
  "APIs",
  "Vercel",
  "GitHub",
  "AI Agents",
  "Automation",
];

export async function TechnologySection() {
  const t = await getDictionary();

  return (
    <section id="tecnologia" className="border-t border-white/16 py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.technology.eyebrow}
            title={t.technology.title}
            description={t.technology.description}
          />
        </Reveal>
        <Reveal>
          <ul className="mt-10 flex flex-wrap gap-3">
            {stack.map((item) => (
              <li
                key={item}
                className="border border-white/18 px-4 py-2.5 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
