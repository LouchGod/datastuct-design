# 原型模式（ProtoType）

## What

原型模式是一种创建型设计模式，它通过复制现有对象来创建新对象，而不是通过调用构造函数。JavaScript 本身基于原型继承，因此原型模式在 JavaScript 中非常自然。

## When

1. 减少对象创建的开销：当直接创建对象的成本较高时（例如需要复杂的计算或资源加载），可以通过复制现有对象来节省资源。

2. 动态配置对象：可以在运行时动态地添加或修改对象的属性和方法。

3. 简化对象创建：避免重复编写复杂的初始化代码。

## How

js 似乎天然就支持

```
const prototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
  clone() {
    return Object.create(this);
  },
};

const obj1 = Object.create(prototype);
```
    