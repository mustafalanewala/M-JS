// Static Props
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
