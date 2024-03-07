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
const createFile = (filePath, fileData = '') => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, fileData);
    }
};

// Function to load yaml configuration
const yamlFile = (filePath) => {
    const defaultFilePath = path.join(__dirname, "..", "/config", 'structure-config.yaml');
    const configPath = fs.readFileSync(filePath || defaultFilePath);
    return yaml.load(configPath);
}

// Function to load template file - filename required
const templateFile = (fileName, language = "node", templatePath) => {
    const defaultFilePath = path.join(__dirname, "..", "/template", language, fileName + ".js");
    templatePath = templatePath || defaultFilePath;

    return fs.readFileSync(templatePath, { encoding: 'utf8' });
}

module.exports = {
    createFile,
    createFolder,
    yamlFile,
    templateFile
}