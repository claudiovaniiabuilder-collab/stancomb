export const site = {
  companyName: "STANCOMB",
  descriptor: "Technology & Systems",
  tagline: "From Compass to Code.",
  headline: "Transformamos processos em sistemas inteligentes.",
  supporting:
    "Se sua operação ainda depende de planilhas, WhatsApp, papel ou controles manuais, nós transformamos esse processo em um sistema simples, conectado e inteligente.",
  locale: "pt-BR",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  seo: {
    title: "STANCOMB | Technology, AI & Business Systems",
    description:
      "Transformamos processos empresariais, industriais e logísticos em sistemas inteligentes, aplicações SaaS, automações e soluções com Inteligência Artificial.",
  },
} as const;

export type SiteConfig = typeof site;

export const socialLinks = {
  linkedin: site.linkedin,
  email: site.email,
  whatsapp: site.whatsapp,
} as const;

export function getSiteUrl() {
  if (site.domain) {
    return site.domain.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function getWhatsAppHref(message?: string) {
  const digits = site.whatsapp.replace(/\D/g, "");

  if (!digits) {
    return "#contato";
  }

  const url = new URL(`https://wa.me/${digits}`);

  if (message) {
    url.searchParams.set("text", message);
  }

  return url.toString();
}

export function getMailtoHref() {
  return site.email ? `mailto:${site.email}` : "";
}

export type ContactChannel = {
  id: "linkedin" | "email" | "whatsapp";
  href: string;
  label: string;
  external?: boolean;
};

export function getContactChannels(): ContactChannel[] {
  const channels: ContactChannel[] = [];

  if (site.linkedin) {
    channels.push({
      id: "linkedin",
      href: site.linkedin,
      label: "LinkedIn",
      external: true,
    });
  }

  if (site.email) {
    channels.push({
      id: "email",
      href: `mailto:${site.email}`,
      label: site.email,
    });
  }

  if (site.whatsapp) {
    channels.push({
      id: "whatsapp",
      href: getWhatsAppHref(),
      label: "WhatsApp",
      external: true,
    });
  }

  return channels;
}
