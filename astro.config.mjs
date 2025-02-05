// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkSpeechBubble from './src/plugins/remark-speech-bubble/plugin';

import react from '@astrojs/react';

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
            expressiveCode: {
                shiki: {
                    langAlias: {
                        "compressed-json": "text"
                    }
                }
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
            ],
            components: {
                PageTitle: "./src/components/PageTitle.astro",
                ContentPanel: "./src/components/ContentPanel.astro",
                MarkdownContent: "./src/components/MarkdownContent.astro",
                Footer: "./src/components/Footer.astro",

            }
        }),
        react()
    ],
    vite: {
        define: {
            "process.env.IS_PREACT": JSON.stringify("true"),
        }
    },
    markdown: {
        remarkPlugins: [
            remarkSpeechBubble
        ]
    },
});