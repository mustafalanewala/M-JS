// Objects in JavaScript
// - Objects are collections of key-value pairs. Objects in JavaScript are mutable by default.
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
// it prevents new properties from being added, existing properties from being removed,and values of existing properties from being changed.
Object.freeze(JsUser);


JsUser.age = 21; // This will not change the age property
console.log(JsUser.age); // Output will still be 20


// Adding a new property will not work
JsUser.newProperty = "This won't be added";
console.log(JsUser.newProperty); // Output will be undefined


// Another object example
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
// Symbols are unique identifiers, useful for avoiding name collisions in objects
const uniqueKey = Symbol("uniqueKey");
const exampleObject = {
  [uniqueKey]: "This is a unique value",
  regularKey: "This is a regular value",
};

console.log(exampleObject[uniqueKey]); 
console.log(typeof uniqueKey);


// Creating an empty object
// const tinderUser = new Object(); 
const tinderUser = {} // Both create regular objects, not singletons

// Adding properties to the object
tinderUser.id = "123"
tinderUser.name = "Mustafa"
tinderUser.isLoggedIn = false
console.log(tinderUser)

// Object with nested object and array
const instaUser = {
  email: "mustafa@gmail.com",
  fullname: {
    firstname: "Mustafa",
    lastname: "Lanewala"
  },
  hobbies: ["Reading", "Coding", "Traveling"],
}

console.log(instaUser.fullname.firstname)

// objects with numeric keys
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// Different ways to merge objects:
// Method 1: Nesting objects (not recommended for merging)
// const obj3 = {obj1, obj2}
// This would create an object with obj1 and obj2 as nested objects, not merging their properties

// Method 2: Using Object.assign()
// const obj3 = Object.assign({}, obj1, obj2)
// This merges obj1 and obj2 into a new empty object {}

// Method 3: Using the spread operator (recommended)
const obj3 = {...obj1, ...obj2}
// This creates a new object by spreading the properties of obj1 and obj2
console.log(obj3)


// Array of objects
const users = [
  {
    id: 1,
    name: "Mustafa",
    age: 20,
    email: "mustafa@gmail.com",
  },
  {
    id: 2,
    name: "John",
    age: 25,
    email: "john@gmail.com",
  }
]

// Object methods
console.log(Object.keys(tinderUser));   
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser));
// This method can be used to check if an object has a specific property as its own property (not inherited)
console.log(tinderUser.hasOwnProperty('id'));
console.log(tinderUser.hasOwnProperty('toString')); 
console.log(tinderUser.hasOwnProperty('toString')); 


// Object.create()
// This method creates a new object with the specified prototype object and properties
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
me.name = "Mustafa";
me.isHuman = true;
me.printIntroduction();


// Object.defineProperty()
// This method defines a new property directly on an object, or modifies an existing property, and returns the object
Object.defineProperty(me, 'age', {
  value: 20,
  writable: false
});


console.log(me.age);
me.age = 25; // This won't change the age
console.log(me.age);


// Important: Object methods vs. prototype methods
// Object methods are called on the Object constructor itself, while prototype methods are available on all objects

// Object method example:
const keys = Object.keys(tinderUser);

// Prototype method example:
const hasId = tinderUser.hasOwnProperty('id');


// Object destructuring
const { email, fullname: { firstname } } = instaUser;
console.log(email, firstname);
