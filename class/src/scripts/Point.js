class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;

    console.log("construct");
  }

  init() {
    console.log("init");
  }

  translate(x = 0, y = 0) {
    this.x += x;
    this.y += y;

    this.toString();
  }

  toString() {
    const { x, y } = this;
    const value = `Les coords sont: [${x}, ${y}]`;

    console.log(value);
    return value;
  }
}

export default Point;
