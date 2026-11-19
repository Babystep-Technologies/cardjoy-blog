// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.felicito.app',
  outDir: './dist',
	redirects: {
		'/blog/first-day-of-cardjoy': '/blog/first-day-of-felicito',
		'/blog/how-do-we-plan-to-grow-cardjoy': '/blog/how-do-we-plan-to-grow-felicito',
	},
	server: {
		port: 3003,
		host: '0.0.0.0'
	},
	integrations: [mdx(), sitemap()],
});
