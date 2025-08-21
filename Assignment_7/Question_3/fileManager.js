// Question 3 (fs Module – File Manager)
// Create a file fileManager.js Export the following functions (CommonJS or ES6): 
// createFile(filename, content) → creates a new file with given content. 
// readFile(filename) → reads and prints the file content.
// appendFile(filename, content) → appends content to an existing file.


const fs = require('fs');

function createFile(filename, content) {
  fs.writeFileSync(filename, content, 'utf8'); // utf8 is used for text file encoding
}

function readFile(filename) {
  const data = fs.readFileSync(filename, 'utf8');
  console.log(data);
}

function appendFile(filename, content) {
  fs.appendFileSync(filename, content, 'utf8');
}

module.exports = { createFile, readFile, appendFile };
