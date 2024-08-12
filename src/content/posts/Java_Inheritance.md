---
title: "繼承"
pubDate: 2024-08-05
featured: true
description: "物件導向的基本概念 : 繼承"
author: "YH"
tags: ["Java", "backend"]
---

> 子類別繼承父類別,可以避免重複定義行為與實作

#### 繼承共同行為與實作

子類別使用 **extends** 關鍵字來繼承父類別, ChildClass 會擴充 ParentClass 的行為與實作也就是繼承

```java
public class ChildClass extends ParentClass{
    public void childMethod(){
        System.out.println("父類別沒有的方法");
    }
}
```

子類別只能繼承一個父類別,子類別與父類別間會有 is-a 關係  
ChildClass 是一種 ParentClass(ChildClass is a ParentClass)

Manager 繼承 Employee  
經理是一種員工 "is-a"關係  
實際上子類比父類有的功能更多

```java
public class Employee{
    private double salary;
    public double getSalary(){
        return this.salary;
    }
}

public class Manager extends Emoplyee{
    private double bonus;

    public void setBonus(double bonus){
        this.bonus = bonus;
    }

// 覆蓋父類別的getSalary()
    public double getSalary(){
        return super.getSalary() + this.bonus;
    }
}

```

#### 覆蓋方法 Override

繼承的實例中,方法簽署(method signature)相同 ex:public void getSalary()  
操作介面是相同的,只是實作內容不同 稱為**重新定義(override)**  
可以將 getSalary()提升至父類別定義