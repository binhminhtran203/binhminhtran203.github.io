import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  output: 'static',
  trailingSlash: 'always',
  site: process.env.SITE_URL || 'https://binhminhtran203.github.io',
});
