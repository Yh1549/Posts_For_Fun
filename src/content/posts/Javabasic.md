---
title: "基礎語法"
pubDate: 2024-08-03
featured: true
description: "java 基礎語法"
author: "YH"
tags: ["Java", "first post", "backend"]
---

> 注意資料型態在儲存時對記憶體的影響,ex:123 這個整數要用多少長度的記憶體來儲存比較經濟

## 型態

**java 可區分為兩大型態系統**

1. 基本型態(Primitive type)(共 8 種,4 種整數,２種小數點,1 種字符類型,1 種 boolean)
2. 類別型態(Class type),亦為參考型態(Refrence type)

在 java 中基本型態 可分為**整數**,**位元組**,**字元**,**布林**

### 整數

<table>
  <tr>
    <th>類型</th>
    <th>需求</th>
    <th>範圍</th>
  </tr>
  <tr>
    <td>int</td>
    <td>4位元</td>
    <td>-2,147,483,648 ~ 2,147,483,647</td>
  </tr>
  <tr>
    <td>short</td>
    <td>2位元組</td>
    <td>-32,768 ~ 32,767</td>
  </tr>
  <tr>
    <td>long</td>
    <td>8位元組</td>
    <td>-9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807</td>
  </tr>
  <tr>
    <td>byte</td>
    <td>1位元組</td>
    <td>-128 ~ 127</td>
  </tr>
</table>

### 浮點數

<table>
  <tr>
    <th>類型</th>
    <th>需求</th>
    <th>範圍</th>
  </tr>
  <tr>
    <td>float</td>
    <td>4位元組</td>
    <td>正負3.402,823,47 * 10的38次方(6~7位有效數字)</td>
  </tr>
  <tr>
    <td>double(double-precision)</td>
    <td>8位元組</td>
    <td>正負1.797,693,134,862,315,70 * 10的308次方(15位有效數字)</td>
  </tr>
</table>

> float 有一個後綴 F 或 f(ex-> 3.14F),沒有後綴 F 的浮點數總是默認為 double 類型

字元

1. 表示單個字符
1. char(每個字元佔 2 位元組)

布林

1. boolean(在 java 中不用在意 boolean 長度)

:::info
:bulb: 如果儲存的資料超出型態範圍稱之為**溢值(overflow)**,會造成程式不可預期的結果
:::

```
system.out.printf('%d ~ %d%n',byte.MIN_VALUE,byteMAX_VALUE)
//使用api印出byte的最小與最大值
```

> // 為 java 中的單行註解,/\* \*/為多行註解
> println()輸出文字後換行
> print()輸出文字後不換行
> printf(arg,"sentence") f=>format 將文字做格式化後輸出,%d %n 等為格式控制符號

**枚舉(enumerated type)**

```java
enum Size{SMALL,MEDIUM,LARGE};
size s = size.MEDIUＭ;
//size類型的變數只能存取這個類的某個值或null
```

### 運算子

**算術運算**
相關運算子=,-,\*,/也就是加減乘除
**比較運算(關係運算)**
(>,>=,<,<=,==,!=) 條件成立時以 boolean 的 true 表示
**邏輯運算**
邏輯運算子(Logical operator)=>&&(and),||(or),!(not )
**位元運算**

**自增與自減運算符**
後綴形式

```java
  int n = 12;
  n++;

```

前綴形式

```java
  int m = 7;
  int n = 7;
  int a = 2 * m++;// a = 16; m = 8;
  int b = 2 * ++n;// b = 14; n = 8;
```

**條件運算符(Conditional)**
?:可以根據一個布林表達式選擇一個值
condition ? expression1 : expression2

```java
  x<y ? x : y
```

**swicth 表達式**

case 可以是字串或枚舉常數

```java
  String seasonName = swicth(seasonCode)
  {
    case 0 ->"Spring";
    case 1 ->"Summer";
    case 3 ->"Fall";
    case 4 ->"Winter";
    default ->"???";
  };
  String seasonLetter = swicth(seasonCode)
  {//多個標籤用逗號分隔
    case "Spring", "Summer", "Winter" -> 6;
    case "Winter" -> 4;
    default -> 1;
  }
  enum Size {SMALL,MEDIUM,LARGE}
  Size itemSize = ...;
  String label = swicth (itemSize)
  {
    case SMALL ->"s";//不須使用Size.SMALL
    case MEDIUM ->"m";
    case LARGE ->"l";
  }
  //此例中可以省略default,因為每個值都有相對應的case
```

**位運算符**
