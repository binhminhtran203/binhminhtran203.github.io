import type { APIRoute } from 'astro';
import { projects } from '../data/profile';
import { localizePath } from '../i18n';
export const GET: APIRoute = ({site}) => {
  const paths=['/','/research/','/publications/','/about/',...projects.map(p=>`/research/${p.slug}/`)];
  const locales = ['en', 'vi'] as const;
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${paths.flatMap(path=>locales.map(locale=>`<url><loc>${new URL(localizePath(path,locale),site).href}</loc><lastmod>2026-10-29</lastmod>${locales.map(language=>`<xhtml:link rel="alternate" hreflang="${language}" href="${new URL(localizePath(path,language),site).href}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${new URL(path,site).href}"/></url>`)).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});
};
