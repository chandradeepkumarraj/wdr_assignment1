// Question 4 (File Copy)

// Write a program to copy the contents of a file named source.txt to a new file named destination.txt.

// Before copying, check if source.txt exists.

// If it doesn’t exist, print a message "Source file does not exist."

const fs = require('fs');

const source = 'source.txt';
const destination = 'destination.txt';

if (fs.existsSync(source)) {
  const content = fs.readFileSync(source, 'utf8');
  fs.writeFileSync(destination, content, 'utf8');
  console.log('File copied successfully.');
} else {
  console.log('Source file does not exist.');
}
