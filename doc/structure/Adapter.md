# 适配器模式（ Adapter ）

## What

Adapter 模式是一种结构性设计模式，用于解决两个类或者模块不一致的问题，通过添加适配器作为中间层连接起来，实现兼容

## When

1. 接口不兼容：当现有类的接口不符合需求时。
2. 复用旧代码：在不想修改现有代码的情况下，复用旧代码。
3. 集成第三方库：当需要集成第三方库，但其接口与现有系统不兼容时。

## How

```
class OldApi {
  add() {
    return "old add fn";
  }
}

class newApi {
  create() {
    return "new add fn";
  }
}

class Adapter {
  constructor(api) {
    this.api = api;
  }

  create() {
    // 调用旧系统的方法，并适配到新系统的接口
    return this.api.add();
  }
}

/*************** 调用 ************  */

function useApi(sys) {
  const res = sys.create();
  console.log("res");
}

// 新api系统
const api_new = new newApi();
useApi(api_new);

// 就api系统
const api_old = new OldApi();
const adapter = new Adapter(api_old);
useApi(adapter);


```
