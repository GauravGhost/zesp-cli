const {templateFile} = require('./fs-helper')

const dummyTemplate = (props, layerName, file) => {
    file = file || templateFile(layerName);
    for (const [key, value] of Object.entries(props)) {
        file = file.replace(`{${key}}`, value);
    }
    return file;
}

module.exports = {
    dummyTemplate
}