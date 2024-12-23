// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://teofilosalgado.github.io',
	base: 'vault',
	integrations: [
		starlight({
			title: 'Vault',
			social: {
				github: 'https://github.com/teofilosalgado/vault',
			},
			sidebar: [
				{
					label: 'Receitas',
					autogenerate: { directory: 'Receitas' },
				},
				{
					label: 'Mandarim',
					autogenerate: { directory: 'Mandarim' },
				},
			],
			customCss: [
				'@fontsource-variable/inter',
				'./src/styles/custom.css',
			]
		}),
	],
});
