import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale, defaultLocale } from '../config';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale) { throw new Error('No locale'); }

  const validLocale = locales.includes(locale as Locale) ? locale : defaultLocale;


  return {
    locale: validLocale, // Explicitly return the locale
    messages: (await import(`../dictionaries/${validLocale}.json`)).default
  };
});
