import { Shape } from "./shape.js";

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle"); // from parent

    if (
      typeof height !== "number" ||
      height <= 0 ||
      typeof width !== "number" ||
      width <= 0
    ) {
      throw new Error("❌ Height and Width must be a non-negative number");
    }

    this.width = width;
    this.height = height;
  }

  area = () => this.height * this.width;
  perimeter = () => 2 * (this.height + this.width);

  // Optional Override
  toString() {
    return `${this.shape} => width: ${this.width} height: ${
      this.height
    } - Area = ${this.area()}  Perimeter: ${this.perimeter()}`;
  }
}

const rect = new Rectangle(3, 7);
console.log(rect.toString());
