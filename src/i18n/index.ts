import { en, type Dictionary } from './en';
import { es } from './es';
import { ca } from './ca';
import { toLocale, type Locale } from './config';

export * from './config';
export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, es, ca };

/** Resolve the active locale (from `Astro.currentLocale`) and its dictionary. */
export function useI18n(currentLocale: string | undefined) {
  const locale = toLocale(currentLocale);
  return { locale, t: dictionaries[locale] };
}
