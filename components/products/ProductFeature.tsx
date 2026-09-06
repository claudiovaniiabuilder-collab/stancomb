import { Reveal } from "@/components/ui/Reveal";

type ProductFeatureProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  screen: React.ReactNode;
  reverse?: boolean;
};

export function ProductFeature({
  eyebrow,
  title,
  description,
  points,
  screen,
  reverse = false,
}: ProductFeatureProps) {
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <p className="font-mono text-[0.62rem] tracking-[0.2em] text-brass uppercase">
          {eyebrow}
        </p>
        <h2 className="font-display mt-3 text-2xl text-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
        <ul className="mt-5 space-y-2">
          {points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm text-steel before:mt-2 before:block before:h-1 before:w-1 before:shrink-0 before:bg-brass"
            >
              {point}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.08}>{screen}</Reveal>
    </div>
  );
}
