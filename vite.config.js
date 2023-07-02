/** @type {import('vite').UserConfig} */
export default {
    build: {
        target: 'esnext',
        modulePreload: {polyfill: false},
        sourcemap: true,
        minify: false,
    },
};
