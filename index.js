// index.js
const fs = require('fs');
const path = require('path');

// List all files in a directory
function listFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error(err);
        } else {
            files.forEach(file => {
                console.log(file);
            });
        }
    });
}

// Read a file
function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
        }
    });
}

// Write to a file
function writeFile(filePath, content) {
    fs.writeFile(filePath, content, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('File written successfully');
        }
    });
}

// Usage
listFiles('./');
readFile('./input.txt');
writeFile('./output.txt', 'Hello, World!');

// Delete a file
function deleteFile(filePath) {
    fs.unlink(filePath, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('File deleted successfully');
        }
    });
}

// Usage
deleteFile('./output.txt');

// Rename a file
function renameFile(oldPath, newPath) {
    fs.rename(oldPath, newPath, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('File renamed successfully');
        }
    });
}

// Usage
renameFile('./oldName.txt', './newName.txt');

// Check if a file exists
function fileExists(filePath) {
    if (fs.existsSync(filePath)) {
        console.log('File exists');
    } else {
        console.log('File does not exist');
    }
}

// Usage
fileExists('./checkFile.txt');

// Create a new directory
function createDirectory(directoryPath) {
    fs.mkdir(directoryPath, { recursive: true }, (err) => {
        if (err) {
            console.error('Failed to create directory:', err);
        } else {
            console.log('Directory created successfully');
        }
    });
}

// Usage
createDirectory('./newDirectory');