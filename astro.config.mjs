// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkSpeechBubble from './src/plugins/remark-speech-bubble/plugin';

// https://astro.build/config
export default defineConfig({
	site: 'https://teofilosalgado.github.io',
	base: 'digital-garden',
	integrations: [
		starlight({
			title: 'teofilo.salgado',
			description: 'My personal digital garden.',
			social: {
				github: 'https://github.com/teofilosalgado',
				linkedin: 'https://www.linkedin.com/in/teofilosalgado',
				email: 'mailto:jvictorteo2000@hotmail.com'
			},
			sidebar: [
				{
					label: 'Projects',
					autogenerate: { directory: 'vault/1. Projects' },
					collapsed: false,
				},
				{
					label: 'Areas',
					autogenerate: { directory: 'vault/2. Areas' },
					collapsed: false,
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'vault/3. Resources' },
					collapsed: false,
				},
				{
					label: 'Archive',
					autogenerate: { directory: 'vault/4. Archive' },
					collapsed: false,
				}
			],
			pagination: false,
			tableOfContents: false,
			customCss: [
				'@fontsource-variable/inter',
				'./src/styles/custom.css',
				'./src/plugins/remark-speech-bubble/plugin.css',
			]
		}),
	],
	markdown: {
		remarkPlugins: [
			remarkSpeechBubble
		]
	}
});
