// Class
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
