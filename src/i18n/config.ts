export const locales = ['en', 'es', 'ca'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { short: string; name: string; htmlLang: string; ogLocale: string; intl: string }> = {
  en: { short: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB', intl: 'en-GB' },
  es: { short: 'ES', name: 'Español', htmlLang: 'es', ogLocale: 'es_ES', intl: 'es-ES' },
  ca: { short: 'CA', name: 'Català', htmlLang: 'ca', ogLocale: 'ca_ES', intl: 'ca-ES' },
};

export function toLocale(value: string | undefined): Locale {
  return (locales as readonly string[]).includes(value ?? '') ? (value as Locale) : defaultLocale;
}

/** "2026-07" → "Jul 2026" (en) / "jul 2026" (es) / "jul. 2026" (ca).
 *  Built from parts so locales that add connectors ("oct. del 2026") stay compact. */
export function formatMonth(iso: string, locale: Locale): string {
  const [y, m] = iso.split('-').map(Number);
  const month = new Intl.DateTimeFormat(localeMeta[locale].intl, { month: 'short', timeZone: 'UTC' })
    .formatToParts(new Date(Date.UTC(y, m - 1, 1)))
    .find((p) => p.type === 'month')?.value;
  return `${month} ${y}`;
}

/** 0.98 → "0.98" (en) / "0,98" (es, ca) */
export function formatMetric(value: number, decimals: number, locale: Locale): string {
  return new Intl.NumberFormat(localeMeta[locale].intl, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
