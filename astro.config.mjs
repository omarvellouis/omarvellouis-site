import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://omarvellouis.com',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto'
  }
});
