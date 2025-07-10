export class Shape {
  constructor(shapeName) {
    // abstract => you can NOT instantiate object only you can inherit
    if (new.target === Shape) {
      throw new Error("❌ Can NOT instantiate abstract class ");
    }
    this.shape = shapeName;
  }

  area() {
    throw new Error("Must implemnet Area in Inherited Shape");
    // or you can write 0 but this is NOT Readable
  }

  perimeter() {
    throw new Error("Must implemnet Perimeter in Inherited Shape");
    // or you can write 0 but this is NOT Readable
  }

  toString() {
    return `Name: ${
      this.shape
    } - Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }
}
