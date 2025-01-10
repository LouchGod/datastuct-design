# 单例模式（Singleton）

## What
定义了一种一对多的依赖关系，并提供一个全局的可访问方式。
## When
1. 创建全局唯一对象
2. 节约资源空间
## How

单例模式
```
class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  
    static getInstance() {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  

```

惰性单例模式

```
const getSingle = function (fn) {
  let instance;
  return function (...args) {
    return instance || (instance = fn.call(this, args));
  };
};

```