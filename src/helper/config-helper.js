const { yamlFile } = require('../helper/fs-helper');
const store = require('../utils/global-store');

function setProperties(yamlFilePath) {
    const yaml = yamlFile(yamlFilePath);
    console.log(yaml.language);
    store.setValue("language", yaml.language);
    store.setValue("structure",yaml.structure);
    store.setValue("config", yaml.config);
}

const getLanguage = () => store.getValue("language");
const getStructure = () => store.getValue("structure");
const getConfig = () => store.getValue("config");

module.exports = {
    setProperties,
    getLanguage,
    getStructure,
    getConfig
}
