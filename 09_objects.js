// Objects in JavaScript
// - Objects are collections of key-value pairs. The keys are strings (or Symbols), and the values can be any data type, including other objects.
// - Creation: Objects can be created using object literals, constructors, or the Object.create() method.
// - Access: Properties can be accessed using dot notation (obj.key) or bracket notation (obj["key"]).
// - Methods: Functions can be added as properties to create methods.
// - Symbols: Symbols can be used as unique keys in objects.
// - Immutability: Use Object.freeze() to make an object immutable, preventing any changes.
// - Prototypes: Objects can inherit properties and methods from a prototype.

// Creating an object using object literal syntax
const JsUser = {
  name: "Mustafa",
  age: 20,
  location: "dahod",
  email: "mustafa@gmail.com",
  isLoggedIn: false,
};

// Accessing object properties
console.log(JsUser.name); // Dot notation
console.log(JsUser["age"]); // Bracket notation

// Adding a method to the object
JsUser.greeting = function () {
  console.log("Hello, welcome!");
};

JsUser.greeting();

// Object.freeze() method freezes an object. A frozen object can no longer be changed;
// it prevents new properties from being added, existing properties from being removed,
// and values of existing properties from being changed.
Object.freeze(JsUser);

JsUser.age = 21; // This will not change the age property
console.log(JsUser.age); // Output will still be 20

// Adding a new property will not work
JsUser.newProperty = "This won't be added";
console.log(JsUser.newProperty); // Output will be undefined

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  startEngine: function () {
    console.log("Engine started");
  },
};

console.log(car.brand);
car.startEngine();

// Using Symbol in an object
const uniqueKey = Symbol("uniqueKey");
const exampleObject = {
  [uniqueKey]: "This is a unique value",
  regularKey: "This is a regular value",
};

console.log(exampleObject[uniqueKey]); 
console.log(typeof uniqueKey);
