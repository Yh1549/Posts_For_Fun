---
title: "多型"
pubDate: 2024-08-12
featured: true
description: "物件導向的基本概念 : 多型"
author: "YH"
tags: ["Java", "backend"]
---

#### 多型

將子類對象賦予父類變數

```java
    Employee e;
    e = new Employee();
    e = new Manager();
```

物件變數是多型的(polymorphic),一個Employee類別的變數可以引用一個Employee類型的對象,也可以引用任何一個子類的對象

```java
    Manager boss = new Manager()
    Employee[] staff = new Employee[3];
    staff[0] = boss;

    boss.setBonus(5000);//合法
    staff[0].setBonus(5000);//不合法
    Manger m = staff[i];//不合法, 如果m調用了setBonus方法 但其引用的對象不是Manager 就會出錯
```

> 不能將父類的引用賦給子類變數
