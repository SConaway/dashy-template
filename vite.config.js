import handlebars from 'vite-plugin-handlebars';

/** @type {import('vite').UserConfig} */
export default {
    build: {
        target: 'esnext',
        modulePreload: {polyfill: false},
        sourcemap: true,
        minify: false,
    },
    plugins: [
        handlebars({
            async context() {
                return {
                    apps: [
                        {
                            name: 'GitHub',
                            url: 'github.com/sconaway',
                            icon: 'arcticons:github',
                        },
                        {
                            name: 'Lobsters',
                            url: 'lobste.rs',
                            icon: 'fluent-emoji-high-contrast:lobster',
                        },
                    ],
                    links: [
                        {
                            category: 'Tech',
                            links: [
                                {
                                    name: 'github',
                                    url: 'github.com/sconaway',
                                },
                                {
                                    name: 'Lobsters',
                                    url: 'lobste.rs',
                                },
                            ],
                        },
                        {
                            category: 'Tech',
                            links: [
                                {
                                    name: 'github',
                                    url: 'github.com/sconaway',
                                },
                                {
                                    name: 'Lobsters',
                                    url: 'lobste.rs',
                                },
                            ],
                        },
                    ],
                };
            },
            // helpers: {
            //     loog: (value) =>
            //         console.log(JSON.stringify(value, null, 4)) || value,
            // },
        }),
    ],
};
