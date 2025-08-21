// Question 5 (File Merge)

// Write a program to merge the contents of two files, file1.txt and file2.txt, into a new file named merged.txt.

// Ensure that the contents of both files appear in the correct order inside merged.txt.

// - Deliverables: Students should submit all .js files and sample text files created for testing.

const fs = require('fs');

const file1 = 'file1.txt';
const file2 = 'file2.txt';
const merged = 'merged.txt';

try {
  const content1 = fs.readFileSync(file1, 'utf8');
  const content2 = fs.readFileSync(file2, 'utf8');
  fs.writeFileSync(merged, content1 + '\n' + content2, 'utf8');
  console.log('Files merged successfully.');
} catch (err) {
  console.error('Error merging files:', err.message);
}
