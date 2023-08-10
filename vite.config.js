import handlebars from 'vite-plugin-handlebars';
import fsp from 'fs/promises';

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
                // read data.json
                // rethrow to describe the error
                try {
                    const data = await fsp
                        .readFile('./data.json', 'utf-8')
                        .then(JSON.parse);

                    console.log(data);
                    return data;
                } catch (err) {
                    console.error('[Error] Error parsing config file');
                    throw err;
                }
            },
            // helpers: {
            //     loog: (value) =>
            //         console.log(JSON.stringify(value, null, 4)) || value,
            // },
        }),
    ],
};
