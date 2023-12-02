// test.js
const chai = require('chai');
const fs = require('fs');
const path = require('path');
const { listFiles, readFile, writeFile, deleteFile, renameFile, fileExists, createDirectory } = require('./index');

const expect = chai.expect;

describe('File Manager', function() {
    it('should list all files in a directory', function(done) {
        listFiles('./');
        // Add your assertions here
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                console.error('Failed to list files:', err);
                expect(err).to.be.ok;
                done();
            } else {
                expect(files).to.be.an('array');
                done();
        };
    });

    it('should read a file', function(done) {
        readFile('./input.txt');
        // Add your assertions here
        fs.readFile('./input.txt', 'utf8', (err, data) => {
            expect(data).to.be.a('string');
            done();
        });
    });

    it('should write to a file', function(done) {
        writeFile('./output.txt', 'Hello, World!');
        // Add your assertions here
        fs.readFile('./output.txt', 'utf8', (err, data) => {
            expect(data).to.equal('Hello, World!');
            done();
        });
    });

    it('should delete a file', function(done) {
        deleteFile('./output.txt');
        // Add your assertions here
        fs.access('./output.txt', fs.constants.F_OK, (err) => {
            expect(err).to.be.ok;
            done();
        });
    });

    it('should rename a file', function(done) {
        renameFile('./oldName.txt', './newName.txt');
        // Add your assertions here
        fs.access('./newName.txt', fs.constants.F_OK, (err) => {
            expect(err).to.be.null;
            done();
        });
    });

    it('should check if a file exists', function(done) {
        fileExists('./checkFile.txt');
        // Add your assertions here
        fs.access('./checkFile.txt', fs.constants.F_OK, (err) => {
            expect(err).to.be.null;
            done();
        });
    });

    it('should create a new directory', function() {
        const directoryPath = './newDirectory';
        createDirectory(directoryPath);
        // Add your assertions here
        const directoryExists = fs.existsSync(directoryPath);
        expect(directoryExists).to.be.true;
    });

});
