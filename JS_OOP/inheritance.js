// Inheritance
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
