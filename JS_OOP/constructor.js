// Constructor Functions
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
