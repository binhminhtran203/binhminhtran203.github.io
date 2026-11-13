import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  output: 'static',
  // The About page was removed; old links open the CV instead.
  redirects: {
    '/about': '/assets/binh-minh-tran-cv.pdf',
    '/vi/about': '/assets/binh-minh-tran-cv.pdf',
  },
  trailingSlash: 'always',
  site: process.env.SITE_URL || 'https://binhminhtran203.github.io',
});
