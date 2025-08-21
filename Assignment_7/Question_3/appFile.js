// Question 3 (fs Module – File Manager)
// Create another file appFile.js. Import functions from fileManager.js.
// Perform the following:
// Create a file named notes.txt with some content.
// Read and print it.
// Append " - This is an appended note."
// Read and print updated content.
const { createFile, readFile, appendFile } = require('./fileManager');

const filename = 'filehandling.txt';

createFile(filename, 'This is the original note.');
console.log('Initial Content:');
readFile(filename);

appendFile(filename, ' - This is an appended note.');
console.log('\nUpdated Content:');
readFile(filename);
