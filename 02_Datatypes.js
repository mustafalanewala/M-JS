// JavaScript Data Types
// - "use strict"; Treat all js code as newer version
// - JavaScript is dynamically typed, meaning variables can hold different types of values
// - The 'typeof' operator is used to determine the type of a value
// - 7 Primitive Datatypes = String, Number, Boolean, null, undefined, Symbol, BigInt
// - 3 Reference or Non-Primitive Datatypes = Array, Objects, Functions
// - Primitive types are immutable and compared by value
// - Reference types are mutable and compared by reference

// 1. Number
let age = 25;
let price = 19.99;
// Note: JavaScript uses 64-bit floating point representation for all numbers

// 2. String
let fullname = "Mustafa Lanewala";
let greeting = 'Hello, How are you!';
let multiLine = `This is a
multi-line string`;
// Note: Strings are immutable in JavaScript
// String methods: length, toUpperCase(), toLowerCase(), trim(), slice(), etc.

// 3. Boolean
let isActive = true;
let isLoggedIn = false;
// Truthy values: true, non-zero numbers, non-empty strings, objects, arrays
// Falsy values: false, 0, '' (empty string), null, undefined, NaN

// 4. Undefined
let undefinedVar;
// Note: Variables that are declared but not initialized have the value 'undefined'

// 5. Null
let emptyValue = null;
// Note: Null represents a deliberate non-value or absence of any object value
// typeof null returns "object", which is a known JavaScript quirk

// 6. Symbol
const uniqueKey = Symbol('description');
// Note: Symbols are unique identifiers, useful for object properties

// 7. BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
// Note: BigInt can represent integers larger than 2^53 - 1
// BigInt operations are slower than regular number operations

// 8. Object (reference type)
let person = {
  name: "Mustafa", 
  age: 20,
  proffesion: "developer"
};

// Arrays are also objects
let fruits = ["apple", "banana", "orange"];
// Array methods: push(), pop(), shift(), unshift(), slice(), splice(), etc.

// Functions 
const myFunction = function(){
  console.log("This is a function");
}
console.log(typeof myFunction)

// Checking types
console.log(typeof age);            // "number"
console.log(typeof fullname);       // "string"
console.log(typeof isActive);       // "boolean"
console.log(typeof undefinedVar);   // "undefined"
console.log(typeof emptyValue);     // "object"
console.log(typeof uniqueKey);      // "symbol"
console.log(typeof bigNumber);      // "bigint"
console.log(typeof person);         // "object"
console.log(typeof fruits);         // "object"

// The instanceof operator can be used to check if an object is an instance of a particular class
console.log(fruits instanceof Array);
console.log(fruits instanceof Object);
console.log(fruits instanceof Function);