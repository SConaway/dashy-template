import fsp from "fs/promises";
import yaml from "yaml";

// read YAML data, parse to object
const inputData = await fsp.readFile("data.yaml", "utf-8").then(yaml.parse)


// check apps
console.log("checking apps")
for (const app of inputData.apps)
    if (!app.name) throw `${JSON.stringify(app)} missing field "name"`
    else if (!app.url) throw `${JSON.stringify(app)} missing field "url"`
    else if (!app.icon) throw `${JSON.stringify(app)} missing field "icon"`

// check links
console.log("checking links")
for (const section of inputData.links) {
    if (!section.category) throw `${JSON.stringify(section)} missing field "name"`
    for (const link of section.links)
        if (!link.name) throw `${JSON.stringify(link)} missing field "name"`
        else if (!link.url) throw `${JSON.stringify(link)} missing field "url"`
}

console.log("everything looks good")
