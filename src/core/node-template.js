const { createFile, createFolder} = require('../helper/fs-helper');
const { layerName } = require('../helper/name-helper');

const structure = (structure) => {
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
                createFile(filePath);
            });
        });
    });
}

module.exports = {
    structure
}

