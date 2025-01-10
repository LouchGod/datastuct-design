# 桥接模式 (Bridge)

## What

桥接模式是一种结构性设计模式。核心思想是将抽象层和实现层分离，使得二者可以独立改变。通过引入一个桥将抽象和实现解耦，使得可以单独改变抽象层和实现层的结构。

## When

1. 当你不希望在多个维度上（如平台、操作系统、界面等）都进行修改时：比如，如果你在多个操作系统上有相同的抽象操作，但每个平台的实现不同，这时可以使用桥接模式来将平台与抽象操作解耦。
2. 当你希望抽象和实现可以独立变化时：即抽象层和实现层不必随时一同变化，可以单独改变某一层的内容。
3. 系统中有多个可扩展的维度时：比如一个应用需要同时处理多个操作系统和多个平台上的不同功能，可以考虑使用桥接模式。

## How

```
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


```
