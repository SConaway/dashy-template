import handlebars from "vite-plugin-handlebars";
import fsp from "fs/promises";
import yaml from "yaml";

/** @type {import('vite').UserConfig} */
export default {
    build: {
        target: "esnext",
        modulePreload: { polyfill: false },
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
                        .readFile("./data.yaml", "utf-8")
                        .then(yaml.parse);

                    console.log(JSON.stringify(data, null, 2));
                    return data;
                } catch (err) {
                    console.error("[Error] Error parsing config file");
                    throw err;
                }
            },
            helpers: {
                log: (value) => console.log(JSON.stringify(value, null, 4)) || value,
                url: (url) => (url.search("://") == -1 ? `https://${url}` : url),
            },
        }),
    ],
};
