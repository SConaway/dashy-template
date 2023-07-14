/** @type {import('vite').UserConfig} */
export default {
    build: {
        target: 'esnext',
        modulePreload: {polyfill: false},
        sourcemap: true,
        minify: false,
    },
    server: {
        hmr: {
            port: 5178,
        },
        strictPort: true,
    },
};
