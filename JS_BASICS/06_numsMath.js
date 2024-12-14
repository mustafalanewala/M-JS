// Numbers and Maths in JavaScript
// - JavaScript numbers are always 64-bit floating point.
// - To work with money, consider using libraries like decimal.js or big.js for precise calculations.

const score = 400

// Creating a number object
const balance = new Number(100)
console.log(balance)
console.log(score)

// Number methods
console.log(balance.toString())  // Converts number to string
console.log(balance.toString().length) 
console.log(balance.toFixed(2))  // Returns a string with specified number of decimals

const otherNumber = 52.53
console.log(otherNumber.toPrecision(2))  // Returns a string with specified length
console.log(otherNumber.toPrecision(1)) 

const Num = 100000000
console.log(Num.toLocaleString('en-IN')) 

// Additional Number Methods
const pi = 3.14159
console.log(pi.toExponential(2))  // Returns a string in exponential notation
console.log(Number.isInteger(42))
console.log(Number.isInteger(42.5)) 

// NaN and Infinity
console.log(Number.isNaN(NaN))  // Checks if the value is NaN
console.log(Number.isFinite(Infinity))  // Checks if the value is finite
console.log(Number.isFinite(42)) 

// ******************* Maths *******************

console.log(Math)  // Displays the Math object and its properties
console.log(Math.abs(-4))  // Returns absolute value
console.log(Math.round(55.67))  // Rounds to nearest integer
console.log(Math.round(24.7))
console.log(Math.ceil(4.3))  // Rounds up to nearest integer
console.log(Math.floor(4.3))  // Rounds down to nearest integer
console.log(Math.sqrt(325))  // Returns square root
console.log(Math.min(4, 3, 7, 1))  
console.log(Math.max(4, 5, 7, 10)) 

console.log(Math.random())  // Returns random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10)  // Random number between 0 and 10
console.log(Math.floor(Math.random() * 10) + 1)  // Random integer between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 

// Additional Math Methods
console.log(Math.pow(2, 3))  // Returns base raised to exponent
console.log(Math.log10(100))  // Returns base 10 logarithm
console.log(Math.sin(Math.PI / 2)) 
console.log(Math.cos(0)) 

// Generating a random integer between two values
function getRandomInt(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Dice roll: ${getRandomInt(1, 6)}`)  // Simulates a dice roll (1-6)

// Example of floating point inaccuracy
console.log(0.1 + 0.2)  // Returns: 0.30000000000000004
// This is due to how floating point numbers are represented in binary
