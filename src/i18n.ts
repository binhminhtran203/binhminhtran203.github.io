export type Locale = 'en' | 'vi';

export function getLocale(pathname: string): Locale {
  return pathname === '/vi' || pathname.startsWith('/vi/') ? 'vi' : 'en';
}

/** Localize site routes while leaving files, fragments, and external URLs alone. */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//') || /^\/(assets|uploads|_astro)\//.test(path)) return path;
  const unprefixed = path.replace(/^\/vi(?=\/|$|[?#])/, '') || '/';
  return locale === 'vi' ? `/vi${unprefixed.startsWith('/') ? unprefixed : `/${unprefixed}`}` : unprefixed;
}

export function text(locale: Locale, en: string, vi: string): string {
  return locale === 'vi' ? vi : en;
}
