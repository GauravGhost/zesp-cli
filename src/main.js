const { Node } = require('./core');
const { yamlFile } = require('./helper/fs-helper')

function templateHandler() {
    const yaml = yamlFile();
    if (yaml.language == "node") {
        Node.template(yamlFile().structure);
    } else {
        console.log("language not supported");
    }
}

templateHandler();