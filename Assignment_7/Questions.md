## Question 1 (CommonJS Exports)
'''
Create a file named mathCommon.js. 

Export two functions using CommonJS: add(a, b) → returns sum multiply(a, b) → returns product

Create another file appCommon.js Import functions from mathCommon.js Use them and print results in the console.

'''
## Question 2 (ES6 Exports) 

'''
Create a file named mathES6.js.

Export two functions using ES6 export: subtract(a, b) → returns difference divide(a, b) → returns quotient

Create another file appES6.js. Import functions from mathES6.js. Use them and print results in the console.

(Hint: add "type": "module" in package.json to use ES6 modules.)

'''

## Question 3 (fs Module – File Manager)
'''

Create a file fileManager.js Export the following functions (CommonJS or ES6): 

createFile(filename, content) → creates a new file with given content. 

readFile(filename) → reads and prints the file content.

appendFile(filename, content) → appends content to an existing file.

Create another file appFile.js. Import functions from fileManager.js.

Perform the following:

Create a file named notes.txt with some content.

Read and print it.

Append " - This is an appended note."

Read and print updated content.

## Question 4 (File Copy)
'''
Write a program to copy the contents of a file named source.txt to a new file named destination.txt.

Before copying, check if source.txt exists.

If it doesn’t exist, print a message "Source file does not exist."

'''
## Question 5 (File Merge)

Write a program to merge the contents of two files, file1.txt and file2.txt, into a new file named merged.txt.

Ensure that the contents of both files appear in the correct order inside merged.txt.

- Deliverables: Students should submit all .js files and sample text files created for testing.