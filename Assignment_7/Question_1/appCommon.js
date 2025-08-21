// Question 1 (CommonJS Exports)
// Create a file named mathCommon.js. 

// Export two functions using CommonJS: add(a, b) → returns sum multiply(a, b) → returns product

// Create another file appCommon.js Import functions from mathCommon.js Use them and print results in the console.


// const { add, multiply } = require('./mathCommon');  error 
const { add, multiply } = require('./Mathcommon');

console.log('Sum:', add(5, 3));         // Output:  8
console.log('Product:', multiply(5, 3)); // Output: 15
