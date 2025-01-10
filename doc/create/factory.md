# 工厂模式（factory）

## What

工厂模式是一种创建型设计模式，它提供了一种创建对象的方式，而无需指定具体的类。工厂模式将对象的创建逻辑封装在一个工厂类中，客户端通过调用工厂方法来获取对象实例。

## When

- 解耦：将对象的创建与使用分离，降低代码的耦合度。

- 扩展性：新增产品类时，只需修改工厂类，无需修改客户端代码。

- 复用性：将对象的创建逻辑集中管理，避免重复代码。

## How

```
class Product {
  use() {
    console.log("Using a product");
  }
}

class ProductA extends Product {
  use() {
    console.log("Using Product A");
  }
}

class ProductB extends Product {
  use() {
    console.log("Using Product B");
  }
}

class Factory {
  createProduct() {
    throw new Error("This method must be overridden");
  }
}

class FactoryA extends Factory {
  createProduct() {
    return new ProductA();
  }
}

class FactoryB extends Factory {
  createProduct() {
    return new ProductB();
  }
}
```
