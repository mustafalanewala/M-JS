// Arrow Functions in JavaScript
// - Arrow functions are a concise way to write function expressions
// - 'this' keyword behaves differently in arrow functions compared to regular functions
// - The behavior of 'this' in arrow functions can be different in Node.js and browsers
// - 'this' in regular functions depends on how the function is called
// - 'this' in arrow functions is lexically bound (inherits from the surrounding scope)
// - Arrow functions cannot be used as constructors

// Examples of This Keyword
const user = {
    username: "Mustafa",
    bday:"30-8-2004",

    welcomeMsg: function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
}

user.welcomeMsg()
user.username = "MustafaLanewala"
user.welcomeMsg()

console.log(this) // Returns an empty object in Node.js
// In a browser window, it would return the window object
// This demonstrates the environment-specific behavior of 'this' in the global scope

// Example of 'this' in a regular function
function hello(){
    let username = "MustafaLanewala"
    console.log(this)
    // In Node.js, this will log a large object (the global object)
    // In a browser, it would log the window object
    console.log(this.username)
    // 'this.username' is undefined because 'username' is a local variable,
    // not a property of 'this' (which refers to the global object in this context)
}
hello()


// Basic Arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Mustafa"));

// Implicit return (only for single expressions)
const add = (a, b) => a + b;
console.log(add(3, 4)); // We don't use 'return' here; it's implicit

// Arrow function with no parameters
const sayHello = () => console.log("Hello!");
sayHello(); 

// Arrow functions and 'this' keyword
const person = {
    name: "Mustafa",
    regularFunction: function() {
        // name: "Mustafa" // If we define here, it will return Undefined
        console.log("Regular function 'this':", this.name);
    },
    arrowFunction: () => {
        console.log("Arrow function 'this':", this.name);
    }
};

person.regularFunction(); // Output: Regular function 'this': Mustafa
person.arrowFunction();   // Output: Arrow function 'this': undefined