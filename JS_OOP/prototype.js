// Prototypes
Person.prototype.sayAge = function () {
  console.log(`I am ${this.age} years old.`);
};
person1.sayAge();

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.mustafa = function () {
  // Add method to all objects
  console.log(`mustafa is present in all objects`);
};

heroPower.mustafa();
myHeros.mustafa();

Array.prototype.heyMustafa = function () {
  // Add method to arrays
  console.log(`mustafa says hello`);
};

// myHeros.heyMustafa()
// heroPower.heyMustafa()


// Inheritance using __proto__ (older syntax)
const parentObj = {
  greet() {
    console.log("Hello from Parent");
  },
};
const childObj = {
  __proto__: parentObj, // Sets prototype of childObj to parentObj
  sayHi() {
    console.log("Hi from Child");
  },
};
childObj.greet(); // Inherits greet() from parentObj
childObj.sayHi();


// Modern syntax
let person = {
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

let teacher = {
  name: "Mr. Mustafa",
};
// Setting prototype using Object.setPrototypeOf
Object.setPrototypeOf(teacher, person);
// Using the inherited method
teacher.greet();
