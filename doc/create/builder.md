# 建造者模式（ Builder ）

## What

建造者模式是一种创建型设计模式，用于分步骤构建复杂对象。它将对象的构建过程与其表示分离，使得同样的构建过程可以创建不同的表示。

## When

1. 分离构建与表示：将对象的构建过程独立出来，使得构建过程更加清晰和灵活。

2. 支持复杂对象的创建：适合创建具有多个组成部分的对象，尤其是当对象的构建过程需要分步骤完成时。

3. 提高代码可读性和可维护性：通过明确的步骤和方法，使代码更易于理解和修改。

## How

```

// 产品类
class Product {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }

  show() {
    console.log("Product parts:", this.parts.join(", "));
  }
}

// 建造者类
class Builder {
  constructor() {
    this.product = new Product();
  }

  buildPartA() {
    this.product.addPart("Part A");
  }

  buildPartB() {
    this.product.addPart("Part B");
  }

  buildPartC() {
    this.product.addPart("Part C");
  }

  getResult() {
    return this.product;
  }
}

// 指挥者类
class Director {
  constructor(builder) {
    this.builder = builder;
  }

  construct() {
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.builder.buildPartC();
  }
}

// 使用建造者模式
const builder = new Builder();
const director = new Director(builder);

director.construct();
const product = builder.getResult();
product.show(); // Product parts: Part A, Part B, Part C
```
