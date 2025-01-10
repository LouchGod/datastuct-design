# 抽象工厂模式（abstractFactory）

## What



## When



## How

```

lass ProductA1 {
  use() {
    console.log("Using Product A1");
  }
}

class ProductA2 {
  use() {
    console.log("Using Product A2");
  }
}

class ProductB1 {
  use() {
    console.log("Using Product B1");
  }
}

class ProductB2 {
  use() {
    console.log("Using Product B2");
  }
}

class AbstractFactory {
  createProductA() {
    throw new Error("This method must be overridden");
  }

  createProductB() {
    throw new Error("This method must be overridden");
  }
}

class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ProductA1();
  }

  createProductB() {
    return new ProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ProductA2();
  }

  createProductB() {
    return new ProductB2();
  }
}

```
