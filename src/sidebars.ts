import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    mainSidebar: [
        {
            type: 'html',
            value: `mmm burger`,
            defaultStyle: true
        },
        {
            type: 'doc',
            id: 'welcome',
            label: 'Welcome'
        },
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                {
                    type: 'doc',
                    id: 'getting-started',
                    label: 'Install',
                }
            ]
        },
        {
            type: 'category',
            label: 'Modules',
            items: [
                {
                    type: 'doc',
                    id: 'modules/audio',
                    label: 'Audio',
                }
            ]
        }
    ]
};

export default sidebars;