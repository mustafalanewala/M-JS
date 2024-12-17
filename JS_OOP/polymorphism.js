// Polymorphism
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
