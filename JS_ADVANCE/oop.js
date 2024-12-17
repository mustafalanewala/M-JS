// 1.Object literals
const user = {
  name: "Mustafa",
  email: "mustafa@example.com",
  signedIn: false,
  getUserDetails: function () {
    // console.log("User details");
    // console.log(`UserName: ${this.name}`);
    console.log(this);
  },
};
console.log(user.name);
console.log(user.getUserDetails());

// 2.Constructor Functions
function Person(name, age) {
  this.name = name; // this is used to get the context
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}
const person1 = new Person("Mustafa", 20);
const person2 = new Person("Murtaza", 21); // If we dont use new keyword it will override the existing instance with the new instance
person1.greet();

// 3.Prototypes
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

// 4.Call Method
function SetUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // Use call to set username in the context of createUser

  this.email = email;
  this.password = password;
}

const M = new createUser("Mustafa", "mustafa@example.com", "123");
console.log(M);

// 5. Class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    console.log(`${this.name} makes a ${this.sound} sound.`);
  }
}
const Lion = new Animal("Lion", "roar");
Lion.speak();

// Behind the scene in JavaScript for classes
// function Animal(name, sound) {
//   this.name = name;
//   this.sound = sound;
// }

// Adding a method to Animal's prototype
// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a ${this.sound} sound.`);
// };

// Creating an instance of Animal
// const Cow = new Animal("Cow", "Mohhh");
// Cow.speak();

// 6. Inheritance
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}
class Child extends Parent {
  sayHi() {
    console.log("Hi from Child");
  }
}
const childInstance = new Child();
childInstance.greet();
childInstance.sayHi();

// 7. Static Props
class MathUtils {
  // Static property
  static PI = 3.14159;

  // Static method
  static square(number) {
    return number * number;
  }

  static circleArea(radius) {
    return this.PI * this.square(radius);
  }
}
// Access static property
console.log(`Value of PI: ${MathUtils.PI}`);
console.log(`Square of 5: ${MathUtils.square(5)}`);
console.log(`Area of circle with radius 3: ${MathUtils.circleArea(3)}`);

// Accessing property descriptor
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

// 8. Getters and Setters
class User1 {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}Mustafa`;
  }

  set password(value) {
    this._password = value;
  }
}
const mustafa = new User1("mustafa@ai.com", "123");
console.log(mustafa.email);
console.log(mustafa.password);

// Property Based Approach
function User2(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const ML = new User2("hello.com", "123");
console.log(ML.email);

// Object Based Approach
const User3 = {
  _email: "hello.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};
const m = Object.create(User3);
console.log(m.email);
console.log(m.password);

// 9.Lexical Scoping
function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable); // innerFunction can access outerVariable
  }

  innerFunction(); // Output: I am outside!
}

outerFunction();

// 10.Closure
function createCounter() {
  let count = 0; // `count` is a variable in the outer scope

  return function () {
    count++; // The inner function has access to `count`
    console.log(count);
  };
}

const counter = createCounter();

counter();
counter();


// 11.Encapsulation
class BankAccount {
  #balance; // Private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
    else console.log("Invalid deposit amount");
  }

  getBalance() {
    console.log(`Balance: ${this.#balance}`);
  }
}
const account = new BankAccount(1000);
account.deposit(500);
account.getBalance();


// 12.Polymorphism
class Shape {
  area() {
    console.log("Area not defined");
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    console.log(`Area of Circle: ${Math.PI * this.radius * this.radius}`);
  }
}
const circle = new Circle(5);
circle.area();


// 13.Abstraction
class Vehicle {
  drive() {
    throw new Error('Method "drive()" must be implemented');
  }
}
class Bike extends Vehicle {
  drive() {
    console.log("Bike is being driven");
  }
}
const bike = new Bike();
bike.drive();