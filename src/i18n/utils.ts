import en from './en';
import zh from './zh';

const translations = { en, zh } as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  if (locale === 'zh') return 'zh';
  return 'en';
}

export function t(locale: Locale): TranslationKeys {
  return translations[locale];
}

export function getLocalePath(path: string, locale: Locale): string {
  return `/${locale}${path}`;
}

export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  const hasTrailingSlash = currentPath.endsWith('/');
  const segments = currentPath.split('/').filter(Boolean);
  if (segments[0] === 'en' || segments[0] === 'zh') {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }
  const result = '/' + segments.join('/');
  return hasTrailingSlash ? result + '/' : result;
}
