// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://teofilosalgado.github.io',
	base: 'digital-garden',
	integrations: [
		starlight({
			title: 'DigitalGarden',
			description: 'My personal digital garden.',
			social: {
				github: 'https://github.com/teofilosalgado',
				linkedin: 'https://www.linkedin.com/in/teofilosalgado',
				email: 'mailto:jvictorteo2000@hotmail.com'
			},
			sidebar: [
				{
					label: 'Vault',
					autogenerate: { directory: 'vault' },
				}
			],
			pagination: false,
			tableOfContents: false,
			customCss: [
				'@fontsource-variable/inter',
				'./src/styles/custom.css',
			]
		}),
	],
});
