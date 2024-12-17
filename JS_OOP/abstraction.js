// Abstraction
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
