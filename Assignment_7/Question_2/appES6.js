// Question 2 (ES6 Exports) 
// Create a file named mathES6.js.

// Export two functions using ES6 export: subtract(a, b) → returns difference divide(a, b) → returns quotient

// Create another file appES6.js. Import functions from mathES6.js. Use them and print results in the console.

// (Hint: add "type": "module" in package.json to use ES6 modules.)



import { subtract, divide } from './mathES6.js';

console.log('Difference:', subtract(10, 4)); // Output: 6
console.log('Quotient:', divide(10, 2));    // Output:  5
