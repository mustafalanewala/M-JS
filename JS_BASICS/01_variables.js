// JavaScript Variables
// - Use const by default, and only use let when you know the value will change
// - Avoid using var in modern JavaScript
// - Always declare variables before using them
// - Use meaningful and descriptive variable names
// - JavaScript is case-sensitive: fullName and fullname are different variables
// - Variables can hold values of any type (dynamic typing)


// 1. const: Used for values that won't be reassigned or changed
const id = 3008
// Note: const variables must be initialized when declared
// const variables are block-scoped

// 2. let: Used for values that may change
let fullname = "mustafa"
// Note: let variables are block-scoped
// let allows you to declare variables that are limited to the scope of a block statement

// 3. var: Older way of declaring variables (avoid using)
var age = 20
// Note: var variables are function-scoped or globally-scoped
// var variables can be re-declared and updated

// 4. Implicit declaration (avoid this)
profession = "Engineer"
// Note: Variables declared without var, let, or const become global variables
// This can lead to unexpected behavior and is considered bad practice

// 5. Declaration without initialization
let email
// Note: Variables declared without initialization have the value 'undefined'

// Attempting to reassign a const variable (will cause an error)
//id = 2024

// Updating variables
fullname = "mustafa lanewala"
age = 22;

// Logging variables
console.log(id);
console.log(fullname);
console.table([id , fullname , age , profession , email]);

// Examples of valid variable names:
let camelCase = "This is the recommended naming convention";
let snake_case = "This is less common in JavaScript";
let _privateVariable = "Underscore prefix is often used for private or internal variables";
let $jqueryStyle = "Dollar sign is allowed, often used with libraries like jQuery";

// Examples of invalid variable names:
// let 123abc = "Cannot start with a number";
// let my-variable = "Hyphens are not allowed";
// let let = "Cannot use reserved keywords";

// Scope example
{
    let blockScoped = "I'm only accessible within this block";
    var functionScoped = "I'm accessible outside this block";
}
// console.log(blockScoped); // This would cause an error
console.log(functionScoped); // This works, but it's not recommended

// Hoisting
console.log(hoistedVar); // Outputs: undefined
var hoistedVar = "I'm hoisted!";
// Note: let and const are not hoisted in the same way as var