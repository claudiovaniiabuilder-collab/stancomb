import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/locale";

export default async function NotFound() {
  const t = await getDictionary();

  return (
    <main className="flex flex-1 items-center py-32">
      <Container>
        <p className="font-mono text-brass">404</p>
        <h1 className="font-display mt-4 text-4xl">{t.notFound.title}</h1>
        <p className="mt-4 max-w-md text-muted">{t.notFound.description}</p>
        <div className="mt-8">
          <Button href={routes.home}>{t.common.backHome}</Button>
        </div>
      </Container>
    </main>
  );
}
