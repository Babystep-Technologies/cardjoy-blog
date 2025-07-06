// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.cardjoy.app',
  outDir: './dist',
	server: {
		port: 3003,
		host: '0.0.0.0'
	},
	integrations: [mdx(), sitemap()],
});
