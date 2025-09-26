import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: "LoveWii",
    tagline: "A framework for building 2D games on the Nintendo Wii",
    favicon: "img/favicon.ico",
    url: "https://lovewii.org",
    baseUrl: "/",

    trailingSlash: true,

    organizationName: "Guglio",
    projectName: "LoveWii",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
        'classic',
        {
            docs: {
            routeBasePath: '/',
                sidebarPath: './src/sidebars.ts',
            },
            blog: false
        } satisfies Preset.Options,
        ],
    ],

    plugins: [['@docusaurus/plugin-ideal-image', { disableInDev: false }]],

    themeConfig: {
        navbar: {
            title: 'LoveWii',
            items: [
                {
                    type: 'doc',
                    position: 'left',
                    docId: 'welcome',
                    label: 'Wiki',
                }
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['lua'],
        },
    } satisfies Preset.ThemeConfig,
}

export default config;