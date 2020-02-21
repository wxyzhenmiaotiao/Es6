import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

//函数的拓展 基本用法

//参数默认值
// function log(x, y) {
//   y = y || 'World';
//   console.log(x, y);
// }
// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello World

//为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值
// if (typeof y === 'undefined') {
//   y = 'World';
// }

//ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面
// function log(x, y = 'World') {
//   console.log(x, y);
// }
// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello

// function Point(x = 0, y = 0) {
//   this.x = x;
//   this.y = y;
// }

// const p = new Point();
// console.log(p) {x: 0, y: 0}

//参数变量是默认声明的，所以不能用let或const再次声明
// function foo(x = 5) {
//   let x = 1; // error
//   const x = 2; // error
// }
//上面代码中，参数变量x是默认声明的，在函数体中，不能用let或const再次声明，否则会报错

// function foo(x, x, y) {
//   console.log(x,y)
// }
// foo(2,1,4)
// 报错
// function foo(x, x, y = 1) {
//   // ...
// }

//另外，一个容易忽略的地方是，参数默认值不是传值的，
//而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的
// let x = 99;
// function foo(p = x + 1) {
//   console.log(p);
// }
// foo() // 100
// x = 100;
// foo() // 101

// function foo({x, y = 5}) {
//   console.log(x, y);
// }

// foo({}) // undefined 5
// foo({x: 1}) // 1 5
// foo({x: 1, y: 2}) // 1 2
// foo() // TypeError: Cannot read property 'x' of undefined

// function foo({x, y = 5} = {}) {
//   console.log(x, y);
// }
// foo() // undefined 5
//上面代码指定，如果没有提供参数，函数foo的参数默认为一个空对象

// function m1({x = 0, y = 0} = {}) {
//   return [x, y];
// }


// // 写法二
// function m2({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }
// console.log(m1())

// // 函数没有参数的情况
// m1() // [0, 0]
// m2() // [0, 0]

// // x 和 y 都有值的情况
// m1({x: 3, y: 8}) // [3, 8]
// m2({x: 3, y: 8}) // [3, 8]

// // x 有值，y 无值的情况
// m1({x: 3}) // [3, 0]
// m2({x: 3}) // [3, undefined]

// // x 和 y 都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]

// m1({z: 3}) // [0, 0]
// m2({z: 3}) // [undefined, undefined]

// 例一
// function f(x = 1, y) {
//   return [x, y];
// }
// f() // [1, undefined]
// f(2) // [2, undefined])
// f(, 1) // 报错
// f(undefined, 1) // [1, 1]
//上面代码中，有默认值的参数都不是尾参数。
//这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined
// function f(x, y = 5, z) {
//   return [x, y, z];
// }

// f() // [undefined, 5, undefined]
// f(1) // [1, 5, undefined]
// f(1, ,2) // 报错
// f(1, undefined, 2) // [1, 5, 2]

// (function (a) {}).length // 1
// (function (a = 5) {}).length // 0
// (function (a, b, c = 5) {}).length // 2
//上面代码中，length属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。
//比如，上面最后一个函数，定义了 3 个参数，其中有一个参数c指定了默认值，因此length属性等于3减去1，最后得到2

//如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
// (function (a = 0, b, c) {}).length // 0
// (function (a, b = 1, c) {}).length // 1

// var x = 1;
// function f(x, y = x) {
//   console.log(y);
// }
//  f(2) // 2
// 上面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。
// 在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2

// let x = 1;
// function f(y = x) {
//   let x = 2;
//   console.log(y);
// }
// f() // 1
//上面代码中，函数f调用时，参数y = x形成一个单独的作用域。这个作用域里面，
//变量x本身没有定义，所以指向外层的全局变量x。函数调用时，函数体内部的局部变量x影响不到默认值变量x


// 如果此时，全局变量x不存在，就会报错
// function f(y = x) {
//   let x = 2;
//   console.log(y);
// }

// f() // ReferenceError: x is not defined

// var x = 1;

// function foo(x = x) {
  
// }

// foo() // ReferenceError: x is not defined



//rest 参数
// function add(...values) {
//   let sum = 0;
//   console.log(values)
//   for (var val of values) {
//     sum += val;
//   }
//   return sum;
// }
// add(2, 5, 3) // 10
//上面代码的add函数是一个求和函数，利用 rest 参数，
//可以向该函数传入任意数目的参数

// function push(array, ...items) {
//   console.log(array)
  // items.forEach(function(item) {
  //   array.push(item);
  //   console.log(item);
  // });
// }
// var a = [456];
// push(a, 1, 2, 3)
//注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
// function f(a, ...b, c) {
//   // ...
// }
//函数的length属性，不包括 rest 参数。


//严格模式
//从 ES5 开始，函数内部可以设定为严格模式
//ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，
//那么函数内部就不能显式设定为严格模式，否则会报错
// 报错
// function doSomething(a, b = a) {
//   'use strict';
//   // code
// }

// // 报错
// const doSomething = function ({a, b}) {
//   'use strict';
//   // code
// };

// // 报错
// const doSomething = (...a) => {
//   'use strict';
//   // code
// };

// const obj = {
//   // 报错
//   doSomething({a, b}) {
//     'use strict';
//     // code
//   }
// };




//箭头函数

// ES6 允许使用“箭头”（=>）定义函数。
// var f = v => v;
// // 等同于
// var f = function (v) {
//   return v;
// };


//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
// var f = () => 5;
// // 等同于
// var f = function () { return 5 };

// var sum = (num1, num2) => num1 + num2;
// // 等同于
// var sum = function(num1, num2) {
//   return num1 + num2;
// };

// var sum = (num1, num2) => { return num1 + num2; }
//如果箭头函数的代码块部分多于一条语句，
//就要使用大括号将它们括起来，并且使用return语句返回

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
// 报错
// let getTempItem = id => { id: id, name: "Temp" };
// // 不报错
// let getTempItem = id => ({ id: id, name: "Temp" });

//下面是一种特殊情况，虽然可以运行，但会得到错误的结果。
// let foo = () => { a: 1 };
// foo() // undefined

//如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了
//let fn = () => void doesNotReturn();

// 箭头函数可以与变量解构结合使用
// const full = ({ first, last }) => first + ' ' + last;
// // 等同于
// function full(person) {
//   return person.first + ' ' + person.last;
// }

//箭头函数使得表达更加简洁。
// const isEven = n => n % 2 === 0;
// const square = n => n * n;

// // 正常函数写法
// [1,2,3].map(function (x) {
//   return x * x;
// });
// // 箭头函数写法
// [1,2,3].map(x => x * x);

//注意点 
// 1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
// 2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
// 3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
// 4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数


// 函数参数的尾逗号
// 此前，函数定义和调用时，都不允许最后一个参数后面出现逗号
// function clownsEverywhere(
//   param1,
//   param2
// ) { /* ... */ }

// clownsEverywhere(
//   'foo',
//   'bar'
// );
//报错

// function clownsEverywhere(
//   param1,
//   param2,
// ) { /* ... */ }

// clownsEverywhere(
//   'foo',
//   'bar',
// );
//这样的规定也使得，函数参数与数组和对象的尾逗号规则，保持一致了。