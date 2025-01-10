import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "设计模式",
  description: "设计模式帮助中心",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "创建型模式", link: "/doc/create/singleton.md" },
      { text: "结构型模式", link: "/doc/structure/Adapter.md" },
      { text: "行为型模式", link: "/doc/action/Chain.md" },
    ],

    sidebar: [
      {
        text: "创建型模式",
        items: [
          { text: "单例模式", link: "/doc/create/singleton" },
          { text: "工厂方法模式", link: "/doc/create/factory" },
          { text: "抽象工厂模式", link: "/doc/create/abstractFactory" },
          { text: "建造者模式", link: "/doc/create/builder" },
          { text: "原型模式", link: "/doc/create/prototype" },
        ],
      },
      {
        text: "结构型模式",
        items: [
          { text: "适配器模式", link: "/doc/structure/Adapter" },
          { text: "桥接模式", link: "/doc/structure/Bridge" },
          { text: "组合模式", link: "/doc/structure/Composite" },
          { text: "装饰器模式", link: "/doc/structure/Decorator" },
          { text: "外观模式", link: "/doc/structure/Facade" },
          { text: "享元模式", link: "/doc/structure/Flyweight" },
          { text: "代理模式", link: "/doc/structure/Proxy" },
        ],
      },

      {
        text: "行为型模式",
        items: [
          { text: "责任链模式", link: "/doc/action/Chain" },
          { text: "命令模式", link: "/doc/action/Command" },
          { text: "解释器模式", link: "/doc/action/Interpreter" },
          { text: "迭代器模式", link: "/doc/action/Iterator" },
          { text: "中介模式", link: "/doc/action/Mediator" },
          { text: "备忘录模式", link: "/doc/action/Memento" },
          { text: "观察者模式", link: "/doc/action/Observer" },
          { text: "状态模式", link: "/doc/action/State" },
          { text: "策略模式", link: "/doc/action/Strategy" },
          { text: "模板方法模式", link: "/doc/action/Template" },
          { text: "访问者模式", link: "/doc/action/Visitor" },
        ],
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]

    // 文章翻页
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    // 移动端 - 外观
    darkModeSwitchLabel: "外观",

    // 移动端 - 返回顶部
    returnToTopLabel: "返回顶部",

    // 移动端 - menu
    sidebarMenuLabel: "菜单",
    lang: "zh-CN",
  },
  appearance: "false", // force-dark
  locales: {
    zh: {
      label: "简体中文",
      lang: "zh",
    },
    en: {
      label: "English",
      lang: "en",
    },
  },
  defaultLocale: "zh", // 设置默认语言为中文
});
