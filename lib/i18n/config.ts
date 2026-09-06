export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const LOCALE_COOKIE = "stancomb-locale";

export function isLocale(value: string | undefined): value is Locale {
  return value === "pt" || value === "en";
}

export function htmlLang(locale: Locale) {
  return locale === "en" ? "en" : "pt-BR";
}

export function openGraphLocale(locale: Locale) {
  return locale === "en" ? "en_US" : "pt_BR";
}
