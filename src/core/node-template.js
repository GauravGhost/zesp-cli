const { toCamelCase } = require('../helper/case-helper');
const { createFile, createFolder } = require('../helper/fs-helper');
const { layerName } = require('../helper/name-helper');
const { dummyTemplate } = require('../helper/template-helper');
const {getConfig, getStructure} = require('../helper/config-helper')
const handler = () =>  {
    const config = getConfig();
    const structure = getStructure();
    if(config && config.method === "template"){
        template(structure);
    } else {
        skeleton(structure);
    }
}

const skeleton = (structure) => {
    // Create folders and files based on the configuration
    Object.entries(structure).forEach(([folderType, folderDetails]) => {
        const { location, file } = folderDetails;
        const folderPath = location;
        createFolder(folderPath);

        // Create sub folders and files
        Object.entries(file).forEach(([fileName, subfolders]) => {
            const folderName = fileName;
            const folderLocation = `${folderPath}/${folderName}`;
            createFolder(folderLocation);

            // Create files inside subfolder
            subfolders.forEach((subfolder) => {
                const filePath = `${folderLocation}/${subfolder}.${layerName(location)}.js`;
                createFile(filePath);
            });
        });
    });
}

const template = (structure) => {

    const props = {};

    // Create folders and files based on the configuration
    Object.entries(structure).forEach(([folderType, folderDetails]) => {
        const { location, file } = folderDetails;
        const folderPath = location;
        createFolder(folderPath);

        // Create subfolders and files
        Object.entries(file).forEach(([fileName, subfolders]) => {
            const folderName = fileName;
            const folderLocation = `${folderPath}/${folderName}`;
            createFolder(folderLocation);

            // Create files inside subfolder
            subfolders.forEach((subfolder) => {
                const filePath = `${folderLocation}/${subfolder}.${layerName(location)}.js`;
                
                props.name = toCamelCase(subfolder);
                props.foldername = "const hello = 'world'";
                const newData = dummyTemplate(props, layerName(location));
                createFile(filePath, newData);
            });
        });
    });
}

module.exports = {
    handler
}

