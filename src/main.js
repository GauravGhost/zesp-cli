const { Node } = require('./core');
const {  setProperties, getLanguage } = require('./helper/config-helper');
const { yamlFile } = require('./helper/fs-helper');
const { NODE } = require('./utils/constant');
const store = require('./utils/global-store');

function templateHandler() {
    setProperties();
    const language = getLanguage();
    if (language.toLowerCase() == NODE) {
        Node.template(yamlFile().structure);
    } else {
        console.log("language not supported");
    }
}

templateHandler();