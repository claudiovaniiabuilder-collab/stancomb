import { ContactForm } from "@/components/sections/ContactForm";
import { getDictionary } from "@/lib/i18n/locale";

export async function ContactSection() {
  const t = await getDictionary();
  return <ContactForm copy={t.contact} />;
}
