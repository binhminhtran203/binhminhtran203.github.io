import type { APIRoute } from 'astro';
import { projects } from '../data/profile';
export const GET: APIRoute = ({site}) => {
  const paths=['/','/research/','/publications/','/about/',...projects.map(p=>`/research/${p.slug}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>${new URL(path,site).href}</loc><lastmod>2026-10-28</lastmod></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});
};
