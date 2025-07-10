import { Shape } from "./shape.js";

class Circle extends Shape {
  constructor(radius) {
    super("Circle"); // from parent

    if (typeof radius !== "number" || radius <= 0) {
      throw new Error("❌ Height and Width must be a non-negative number");
    }

    this.radius = radius;
  }

  area = () => (Math.PI * this.radius * this.radius).toFixed();
  perimeter = () => (2 * Math.PI * this.radius).toFixed();

  // Optional Override
  toString() {
    return `${this.shape}  => Radius: ${
      this.radius
    } - Area = ${this.area()} cm2  Perimeter: ${this.perimeter()} cm`;
  }
}

const circle = new Circle(7);
console.log(circle.toString());
