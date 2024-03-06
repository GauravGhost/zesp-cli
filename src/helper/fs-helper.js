const fs = require('node:fs');
const path = require('node:path');
const yaml = require('js-yaml');

// Function to create Folder if it doesn't exist.
const createFolder = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
};

// Function to create file if it doesn't exist
const createFile = (filePath) => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '');
    }
};

// Function to load yaml configuration
const yamlFile = (filePath) => {
    const defaultFilePath = path.join(__dirname, "..", "/config", 'structure-config.yaml');
    const configPath = filePath || fs.readFileSync(defaultFilePath);
    return yaml.load(configPath);
}

module.exports = {
    createFile,
    createFolder,
    yamlFile
}