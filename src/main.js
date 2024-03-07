const { Node } = require('./core');
const {  setProperties, getLanguage } = require('./helper/config-helper');
const { yamlFile } = require('./helper/fs-helper');
const store = require('./utils/global-store');

function templateHandler() {
    setProperties();
    const language = getLanguage();
    if (language == "node") {
        Node.template(yamlFile().structure);
    } else {
        console.log("language not supported");
    }
}

templateHandler();