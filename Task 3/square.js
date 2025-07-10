import { Shape } from "./shape.js";

class Square extends Shape {
  constructor(height) {
    super("Square"); // from parent

    if (typeof height !== "number" || height <= 0) {
      throw new Error("❌ Height must be a non-negative number");
    }

    this.height = height;
  }
  area = () => this.height * this.height;
  perimeter = () => 4 * this.height;

  // Optional Override
  toString() {
    return `${this.shape} => height: ${this.height} - Area = ${this.height} * ${
      this.height
    }  =  ${this.area()}  Perimeter: ${this.perimeter()}`;
  }
}

const square = new Square(5);
console.log(square.toString());
