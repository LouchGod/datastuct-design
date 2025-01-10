class DrawApi {
  drawCircle() {
    throw new Error("this method must be override");
  }
}

class PrimitiveDrawApi extends DrawApi {
  drawCircle(x, y, radius) {
    console.log("drawCircle by primitive");
  }
}

class EntityDrawApi extends DrawApi {
  drawCircle(x, y, radius) {
    console.log("drawCircle by entity");
  }
}

class Shape {
  constructor(drawApi) {
    this.drawApi = drawApi;
  }

  draw() {
    throw new Error("this method must be override");
  }
}

class Circle extends Shape {
  constructor(x, y, radius, drawApi) {
    super(drawApi);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    this.drawApi.drawCircle(this.x, this.y, this.radius);
  }
}

const primitiveDrawApi = new PrimitiveDrawApi();
const entityDrawApi = new EntityDrawApi();

const circle1 = new Circle(5, 5, 10, primitiveDrawApi);
const circle2 = new Circle(5, 40, 10, entityDrawApi);

circle1.draw();

circle2.draw();
