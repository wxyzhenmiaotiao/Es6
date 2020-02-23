import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <>

      </>
    )
  }
}
//变量的结构赋值
//以前
// let a = 1;
// let b = 2;
// let c = 3;
//现在 es6
//let [a, b, c] = [1, 2, 3];

// 本质上，这种写法属于“模式匹配”，
// 只要等号两边的模式相同，左边的变量就会被赋予对应的值。
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// foo // 1
// bar // 2
// baz // 3

// let [ , , third] = ["foo", "bar", "baz"];
// third // "baz"

// let [x, , y] = [1, 2, 3];
// x // 1
// y // 3

// let [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]

// let [x, y, ...z] = ['a'];
// x // "a"
// y // undefined
// z // []
// 如果解构不成功，变量的值就等于undefined

//另一种情况是不完全解构，即等号左边的模式，
//只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功
// let [x, y] = [1, 2, 3];
// x // 1
// y // 2

// let [a, [b], d] = [1, [2, 3], 4];
// a // 1
// b // 2
// d // 4

//对于 Set 结构，也可以使用数组的解构赋值
// let [x, y, z] = new Set(['a', 'b', 'c']);
// x // "a"

//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth // 5

//默认值
// let [foo = true] = [];
// foo // true

// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

//注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
//所以，只有当一个数组成员严格等于undefined，默认值才会生效
// let [x = 1] = [undefined];
// x // 1
// let [x = 1] = [null];
// x // null

//如果默认值是一个表达式，那么这个表达式是惰性求值的，
//即只有在用到的时候，才会求值
// function f() {
//   console.log('aaa');
// }
// let [x = f()] = [1];
//上面代码中，因为x能取到值，所以函数f根本不会执行。
//上面的代码其实等价于下面的代码
// let x;
// if ([1][0] === undefined) {
//   x = f();
// } else {
//   x = [1][0];
// }

//对象的结构
// let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// console.log(foo)
// console.log(bar)

//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
// let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
// foo // "aaa"
// bar // "bbb"
// let { baz } = { foo: 'aaa', bar: 'bbb' };
// baz // undefined

// 如果解构失败，变量的值等于undefined
// let {foo} = {bar: 'baz'};
// foo // undefined

//对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量
// // 例一
// let { log, sin, cos } = Math;

// // 例二
// const { log } = console;
// log('hello') // hello

// 如果变量名与属性名不一致，必须写成下面这样
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// baz // "aaa"

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// f // 'hello'
// l // 'world'

//与数组一样，解构也可以用于嵌套结构的对象
// let obj = {
//   p: [
//     'Hello',
//     { y: 'World' }
//   ]
// };
// let { p: [x, { y }] } = obj;
// x // "Hello"
// y // "World"

// let obj = {
//   p: [
//     'Hello',
//     { y: 'World' }
//   ]
// };

// let { p, p: [x, { y }] } = obj;
// x // "Hello"
// y // "World"
// p // ["Hello", {y: "World"}]


//默认值
//对象的解构也可以指定默认值
// var {x = 3} = {};
// x // 3
// var {x, y = 5} = {x: 1};
// x // 1
// y // 5
// var {x: y = 3} = {};
// y // 3
// var {x: y = 3} = {x: 5};
// y // 5
// var { message: msg = 'Something went wrong' } = {};
// msg // "Something went wrong"

// 默认值生效的条件是，对象的属性值严格等于undefined
// var {x = 3} = {x: undefined};
// x // 3
// var {x = 3} = {x: null};
// x // null

//字符串的结构赋值
//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
// const [a, b, c, d, e] = 'hello';
// a // "h"
// b // "e"
// c // "l"
// d // "l"
// e // "o"
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
// let {length : len} = 'hello';
// len // 5

//数值和布尔值的机构赋值
//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象
// let {toString: s} = 123;
// s === Number.prototype.toString // true
// let {toString: s} = true;
// s === Boolean.prototype.toString // true

//函数参数的解构赋值
// function add([x, y]){
//   return x + y;
// }
// add([1, 2]); // 3

///函数参数的解构也可以使用默认值
// function move({x = 0, y = 0} = {}) {
//   return [x, y];
// }
// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, 0]
// move({}); // [0, 0]
// move(); // [0, 0]

//undefined就会触发函数参数的默认值
// [1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]

//不能使用圆括号的情况
// 全部报错
// let [(a)] = [1];
// let {x: (c)} = {};
// let ({x: c}) = {};
// let {(x: c)} = {};
// let {(x): c} = {};
// let { o: ({ p: p }) } = { o: { p: 2 } };

//函数参数也属于变量声明，因此不能带有圆括号
// 报错
// function f([(z)]) { return z; }
// 报错
// function f([z,(x)]) { return x; }

//赋值语句的模式
// 全部报错
// ({ p: a }) = { p: 42 };
// ([a]) = [5];

//上面代码将整个模式放在圆括号之中，导致报错
//[({ p: a }), { x: c }] = [{}, {}];

//用途
//交换变量的值
// let x = 1;
// let y = 2;
// [x, y] = [y, x];

// 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。
// 有了解构赋值，取出这些值就非常方便
// 返回一个数组
// function example() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example();
// // 返回一个对象
// function example() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example();



// 编程作用域
//ES6 提出了两个新的声明变量的命令：let和const。
//其中，let完全可以取代var，因为两者语义相同，而且let没有副作用
//严格模式
// 'use strict';
// if (true) {
//   let x = 'hello';
// }
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//var命令存在变量提升效用，let命令没有这个问题
// if (true) {
//   console.log(x); // ReferenceError
//   let x = 'hello';
// }

//在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量
// const优于let有几个原因。
//一个是const可以提醒阅读程序的人，这个变量不应该改变；另一个是const比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；
//最后一个原因是 JavaScript 编译器会对const进行优化，所以多使用const，
//有利于提高程序的运行效率，也就是说let和const的本质区别，其实是编译器内部的处理不同
//const声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误

//字符串
//静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号
// bad
// const a = "foobar";
// const b = 'foo' + a + 'bar';
// // acceptable
// const c = `foobar`;
// // good
// const a = 'foobar';
// const b = `foo${a}bar`;

//结构赋值
// 使用数组成员对变量赋值时，优先使用解构赋值
// const arr = [1, 2, 3, 4];
// // bad
// const first = arr[0];
// const second = arr[1];
// // good
// const [first, second] = arr;
//函数的参数如果是对象的成员，优先使用解构赋值
// bad
// function getFullName(user) {
//   const firstName = user.firstName;
//   const lastName = user.lastName;
// }
// // good
// function getFullName(obj) {
//   const { firstName, lastName } = obj;
// }
// // best
// function getFullName({ firstName, lastName }) {
// }

// // bad
// function processInput(input) {
//   return [left, right, top, bottom];
// }
// // good
// function processInput(input) {
//   return { left, right, top, bottom };
// }
// const { left, right } = processInput(input);

//单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾
// bad
// const a = { k1: v1, k2: v2, };
// const b = {
//   k1: v1,
//   k2: v2
// };
// good
// const a = { k1: v1, k2: v2 };
// const b = {
//   k1: v1,
//   k2: v2,
// };

//对象尽量静态化，一旦定义，就不得随意添加新的属性。
//如果添加属性不可避免，要使用Object.assign方法
// bad
// const a = {};
// a.x = 3;
// // if reshape unavoidable
// const a = {};
// Object.assign(a, { x: 3 });
// // good
// const a = { x: null };
// a.x = 3;

//如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义
// bad
// const obj = {
//   id: 5,
//   name: 'San Francisco',
// };
// obj[getKey('enabled')] = true;
// good
// const obj = {
//   id: 5,
//   name: 'San Francisco',
//   [getKey('enabled')]: true,
// };

//上面代码中，对象obj的最后一个属性名，需要计算得到。
//这时最好采用属性表达式，在新建obj的时候，将该属性与其他属性定义在一起。这样一来，所有属性就在一个地方定义了。


//数组
//使用扩展运算符（...）拷贝数组。
// bad
// const len = items.length;
// const itemsCopy = [];
// let i;
// for (i = 0; i < len; i++) {
//   itemsCopy[i] = items[i];
// }
// good
// const itemsCopy = [...items];
// 使用 Array.from 方法，将类似数组的对象转为数组
// const foo = document.querySelectorAll('.foo');
// const nodes = Array.from(foo);

//函数
// 立即执行函数可以写成箭头函数的形式
// 那些使用匿名函数当作参数的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。
// bad
// [1, 2, 3].map(function (x) {
//   return x * x;
// });
// // good
// [1, 2, 3].map((x) => {
//   return x * x;
// });
// // best
// [1, 2, 3].map(x => x * x);

// 箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this
// bad
// const self = this;
// const boundMethod = function(...params) {
//   return method.apply(self, params);
// }
// // acceptable
// const boundMethod = method.bind(this);
// // best
// const boundMethod = (...params) => method.apply(this, params);

//map结构
// 注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。
//如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制
// let map = new Map(arr);
// for (let key of map.keys()) {
//   console.log(key);
// }
// for (let value of map.values()) {
//   console.log(value);
// }
// for (let item of map.entries()) {
//   console.log(item[0], item[1]);
// }

//Class
//总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。
// bad
// function Queue(contents = []) {
//   this._queue = [...contents];
// }
// Queue.prototype.pop = function() {
//   const value = this._queue[0];
//   this._queue.splice(0, 1);
//   return value;
// }
// good
// class Queue {
//   constructor(contents = []) {
//     this._queue = [...contents];
//   }
//   pop() {
//     const value = this._queue[0];
//     this._queue.splice(0, 1);
//     return value;
//   }
// }


//模块
//首先，Module 语法是 JavaScript 模块的标准写法，坚持使用这种写法。
//使用import取代require
// bad
// const moduleA = require('moduleA');
// const func1 = moduleA.func1;
// const func2 = moduleA.func2;
// good
// import { func1, func2 } from 'moduleA';

// // commonJS的写法
// var React = require('react');
// var Breadcrumbs = React.createClass({
//   render() {
//     return <nav />;
//   }
// });
// module.exports = Breadcrumbs;
// // ES6的写法
// import React from 'react';
// class Breadcrumbs extends React.Component {
//   render() {
//     return <nav />;
//   }
// };
// export default Breadcrumbs;