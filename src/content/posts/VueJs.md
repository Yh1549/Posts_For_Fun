---
title: "常見面試分享"
pubDate: 2024-08-04
featured: false
description: "一些網路常見的面試題目分享,前端的"
author: "Yun"
tags: ["Vuejs", "interview", "frontend"]
---
# 常見面試題

## Vue
---
`一. Vue生命週期`

**Vue2** ： 
* beforeCreate （ 創建前 ）：Vue初始化時期，在這個階段還拿不到Vue Data，也沒有辦法使用vue裡面的Methods, Watch, Computed...等。

* created （ 創建完成 ）：Vue已被建立，在這個階段的動作可以拿到Vue Data, Function, Watch, Computed...等，但網頁內容必須依靠HTML Element才能取得，這時HTML還沒準備好，所以拿不到元素內容。

* beforeMount （ 組件掛載前 ）：已經載入原始HTML至Virtual DOM，但內容尚未透過Vue進行渲染。

* mounted （ 組件掛載完成 ）：已經透過Vue進行渲染HTML，並且取代原本的元素內容。


* beforeUpdate （ 組件更新前 ）：更新前狀態（view層的資料還沒有改變，data中的資料已經改變了），重新渲染之前觸發，只有view上面的資料變化才會觸發beforeUpdate和updated，僅屬於data中的資料改變是並不能觸發。 也就是說資料已經改變了，DOM還沒更新。

* updated （ 組件更新完成 ）：資料已經更改完成，dom也重新render完成。

* beforeUnmount （ 組件銷毀前 ） 

* unmounted （ 組件銷毀完成 ）：所有綁定、事件監聽、Watch與渲染至目標的HTML DOM…等等皆移除。



**Vue3** ：

setup 取代了  beforeCreate && created

setup > onBeforeMount > onMounted > onBeforeUpdate > onUpdated > onBeforeUnmount > onUnmounted

`二.computed 和 watch 差異`
1. 緩存與效能：computed會緩存上次的結果，當computed的響應式狀態未更新，computed就不會重跑，以效能而言
computed 會比 watch 好

2. 監聽對象：computed 可以監聽多個響應式狀態且不用手動告訴vue要監聽誰，watch需要手動告訴vue要監聽誰且只能監聽一個對象

3. 返回值：computed必須要返回一個東西，watch則不一定

4. 異步：watch 可以使用 async 函式

`三. v-if 和 v-show 的差異`

只有當條件為true時，v-if 才會去建立這個元素

v-show 背後則是使用css display:none 屬性來控制

相比起來 v-if 比較耗效能，適合用在不常變動的元素上

`四. vue router hash 和 history 差異`

**hash 模式**是 Vue Router 的默認模式。在 hash 模式下，URL 的格式為 /#/path，其中 # 是分隔符。當使用 hash 模式時，Vue Router 會將路由信息存儲在 URL 的 hash 部分，並使用 window.location.hash 來獲取路由信息。

hash 模式的優點是實現簡單，兼容性好。但是，hash 模式的 URL 中會帶有 # 號，不美觀，而且在歷史記錄中會顯示為空白頁面。

**history 模式**使用 HTML5 的 History API 來管理歷史記錄。在 history 模式下，URL 的格式為 /path，與傳統的 URL 格式相同。當使用 history 模式時，Vue Router 會將路由信息存儲在歷史記錄中，並使用 window.location.href 來獲取路由信息。

history 模式的優點是 URL 格式美觀，在歷史記錄中會顯示正確的頁面。但是，history 模式的兼容性不如 hash 模式，在一些舊版本的瀏覽器中可能會出現問題。

| 特點 | hash | history|
|---------|---------|----------|
| URL 格式     | /#/path      | /path      |
| 歷史記錄     | 不顯示     | 顯示正確頁面    |
| 兼容性     | 好     | 一般     |
| 優點     | 實現簡單，兼容性好      | URL 格式美觀，歷史記錄顯示正確     |

`五. vue 組件傳遞資料方式`

Vue 組件之間的資料傳遞可以分為兩種方式：父傳子和子傳父。

**父傳子**

父傳子是指父組件將資料傳遞給子組件。父組件可以通過 props 屬性來傳遞資料給子組件。

props 屬性是一種特殊的屬性，它可以從父組件傳遞給子組件。props 屬性的值必須是可被 Vue 解析的值，例如字符串、數字、布爾值、對象或數組。

父組件可以通過 props 屬性來定義 props 屬性。
```js
// Home 組件 （父）
<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Hello, Vue!'
    }
  }
}
</script>
```
Home 組件定義了一個 title 屬性，該屬性是可選的，默認值為 Hello, Vue!。

子組件可以通過 props 屬性來接收父組件傳遞的資料。以下是 About 組件的示例：

```js
// About 組件 (子)
<template>
  <h1>{{ title }}</h1>
</template>

<script>
import Home from './Home.vue';

export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>
```

**子傳父**

子傳父是指子組件將資料傳遞給父組件。子組件可以通過事件觸發來傳遞資料給父組件。

子組件可以通過 v-on 指令來監聽事件。當事件觸發時，子組件可以通過 event.detail 屬性來獲取事件傳遞的資料。

父組件可以通過 v-on 指令來監聽子組件觸發的事件。當事件觸發時，父組件可以通過 event.detail 屬性來獲取子組件傳遞的資料。

```js
<template>
  <h1>Home</h1>
  <button @click="onSubmit">提交</button>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      // 將資料傳遞給父組件
      this.$emit('submit', {
        title: 'Hello, Vue!'
      });
    }
  }
};
</script>
```
Home 組件定義了一個 submit 事件，該事件會傳遞一個 title 屬性。

以下是 About 組件的示例：
```js
<template>
  <h1>About</h1>
  <button @click="onSubmit">提交</button>
</template>

<script>
import Home from './Home.vue';

export default {
  methods: {
    onSubmit() {
      // 監聽父組件觸發的 submit 事件
      this.$on('submit', (data) => {
        console.log(data.title); // 'Hello, Vue!'
      });
    }
  }
};
</script>
```
About 組件監聽父組件觸發的 submit 事件。當事件觸發時，About 組件會獲取父組件傳遞的 title 屬性，並將其打印到控制台。

---

## JavaScript

`一.JavaScript陣列方法中的 foreach、map、filter、reduce 差別`

他們都會遍歷陣列，但是

foreach不會返回新的陣列

map 會返回新陣列，所以效能比foreach差

filter 可以透過傳入的判斷是篩選你要的 el，並且返回篩選過的新陣列

reduce 方法是對陣列中的元素進行累積，並返回一個單一的值

`二.比較淺拷貝 (shallow copy) 和深拷貝 (deep copy)`

淺拷貝是指複製值時，原本的變數和新的變數會指向同一個址 (reference)，換句話說，如果拷貝的物件內容有改變，原本的物件也會被改變。以下程式碼是一個簡單的例子。定義一個新變數 objB，並將其值賦予為 objA，此時改變 objB 也會同時改變 objA，因為這兩個變數是共享同一個址 (reference)。

```js
let objA = {
  a: 1,
  b: 2,
};

let objB = objA;

objB.a = 3; // 因為是淺拷貝，objA 的 a 也會被改變

console.log(objA); //{a:3, b:2}
console.log(objB); //{a:3, b:2}
```

相反地，深拷貝是指在拷貝時不共享相同的址 (reference)。以上面的例子，如果 objB 是透過深拷貝創建出來，當我們在更改 objB 的值時，並不用擔心 objA 的值會同樣被更動到。

補充說明，在拷貝值時，有可能會遇到變數是多層的情境，例如是一個物件裡還有物件，深拷貝的定義會是每一層的值都不會共享址 (reference)。以 lodash 這個套件提供的效用函式舉例，也是分成 clone 和 cloneDeep 兩種不同效用函式，clone 只用於淺拷貝(第一層拷貝)，但 cloneDeep 可用於深拷貝。

```js
// lodash 的淺拷貝 clone
var objects = [{ a: 1 }, { b: 2 }];
var shallow = _.clone(objects);
console.log(objects === shallow); // false
console.log(shallow[0] === objects[0]); // true

// lodash 的深拷貝 cloneDeep
var objects = [{ a: 1 }, { b: 2 }];
var deep = _.cloneDeep(objects);
console.log(objects === deep); // false
console.log(deep[0] === objects[0]); // false
```

`三.什麼是箭頭函式 (Arrow Function)？跟一般的函式有什麼差別？`

箭頭函式和一般函式的主要差異有四點：

1. 箭頭函式語法不同、寫法也較簡潔
2. 箭頭函式沒有自己的 this、也無法直接修改 this 的指向
3. 箭頭函式沒有自己的 arguments
4. 箭頭函式不能作為構造函式使用

**語法更為簡潔**

箭頭函式相比於一般函式，語法相當簡潔。除了少去 function 關鍵字，如果只有一個參數，箭頭函式可以省略括號；只有一行程式碼，就是直接簡單返回一個變數或簡單的表達式，可以省略大括號和 return。例子如下：

```js
// ES5 一般函式
let addOne = function (n) {
  return n + 1;
};
// ES6 箭頭函式，參數只有一個時，參數的括號可以省略
let addOne = (n) => {
  return n + 1;
};
// ES6 箭頭函式，只有一行時，省略大括號和 return
let addOne = (n) => n + 1;
```

**this 值與一般函式不同**

箭頭函式沒有自己的 this 值，箭頭函式的 this 值是在一開始定義時就決定，永遠會是最接近自己的外層的普通函式中的 this 值。此外，箭頭函式也不適合使用 call、 apply 和 bind 來綁定 this 值，綁定值會無效。一般函式的 this 值，則是基於函式如何被調用來決定，詳細可參考《請解釋 JavaScript 中 this 的值》一文。

一般函式中 this 可以被綁定，以下為程式碼綁定範例
```js
const obj = {
  num: 100,
};

window.num = 2020;

const add = function (a, b, c) {
  return this.num + a + b + c;
};

// 綁定 this 值為 obj，obj 的 num 為 100，所以 resultCall 是 106
const resultCall = add.call(obj, 1, 2, 3);
console.log(resultCall); // 106
```

箭頭函式中 this 綁定會無效，以下為程式碼綁定範例
```js
const obj = {
  num: 100,
};

window.num = 2020;

const add = (a, b, c) => this.num + a + b + c;

// 綁定 this 無效，add 函式的 this 會是 window
// 所以 num 會是 2020，resultCall 則是 2026
console.log(add.call(obj, 1, 2, 3)); // 2026
```

**沒有自己的 arguments**

不像一般函式，箭頭函式沒有 arguments 物件，但好處是，箭頭函式可以獲取最近的非箭頭函式的 arguments 物件，如下範例

箭頭函式中 arguments 程式碼範例

```js
// 箭頭函式沒有自己的 arguments，因此會往父層尋找
// 這邊的父層是全域環境，因此找到全域環境中的 arguments 變數
// 在全域環境 arguments[0] 為 1
const arguments = [1, 2, 3];
const arr = () => arguments[0];
arr(); // 1

// 一般函式有 arguments 物件，就是傳入的參數，在這邊的 arguments 是 [3]
// 所以 arguments[0] 也會是 3
// f() 則會是 3 + 3
function foo(n) {
  const f = () => arguments[0] + n;
  return f();
}
foo(3); // 3 + 3 = 6
```

**不能作為構造函式使用**

箭頭函式不能作為構造函式使用，換言之不能用 new 關鍵字調用，會報錯
```js
const arrowFun = () => {};
new arrowFun(); // error: arrowFun is not a constructor
```