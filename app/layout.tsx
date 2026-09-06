import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono } from "next/font/google";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TechWatermark } from "@/components/ui/TechWatermark";
import { getSiteUrl, site } from "@/config/site";
import { htmlLang, openGraphLocale } from "@/lib/i18n/config";
import { getDictionary, getLocale } from "@/lib/i18n/locale";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.seo.title,
      template: `%s | ${site.companyName}`,
    },
    description: t.seo.description,
    applicationName: site.companyName,
    keywords: [
      "STANCOMB",
      "sistemas inteligentes",
      "gestão de processos",
      "Worsley",
      "Wind",
      "frota",
      "logística",
      "indústria",
      "automação",
    ],
    authors: [{ name: "STANCOMB Technology & Systems" }],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: openGraphLocale(locale),
      url: siteUrl,
      siteName: site.companyName,
      title: t.seo.title,
      description: t.seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const t = await getDictionary();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.companyName,
        alternateName: "STANCOMB Technology & Systems",
        description: t.seo.description,
        slogan: site.tagline,
        url: site.domain || siteUrl,
        email: site.email || undefined,
        sameAs: site.linkedin ? [site.linkedin] : undefined,
      },
      {
        "@type": "WebSite",
        name: site.companyName,
        url: site.domain || siteUrl,
        inLanguage: htmlLang(locale),
        description: t.seo.description,
      },
    ],
  };

  return (
    <html
      lang={htmlLang(locale)}
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <TechWatermark />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Navbar locale={locale} copy={t.nav} />
          {children}
          <Footer locale={locale} nav={t.nav} copy={t.footer} />
          <BackgroundMusic
            playLabel={t.audio.play}
            pauseLabel={t.audio.pause}
            title={t.audio.title}
          />
          <FloatingWhatsApp
            label={t.whatsapp.label}
            message={t.whatsapp.message}
          />
        </div>
      </body>
    </html>
  );
}
