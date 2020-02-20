import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>
        <div>
          <div> 

          </div>
        </div>
      </div>
    )
  }
}

//数组
//1.拓展运算符 该运算符主要用于函数调用
// function push(array, ...items) {
//   array.push(...items);
// }

// function add(x, y) {
//   return x + y;
// }

// const numbers = [4, 38];
// console.log(add(...numbers))
//上面代码中，array.push(...items)和add(...numbers)这两行，
//都是函数的调用，它们都使用了扩展运算符。该运算符将一个数组，变为参数序列

// function f(v, w, x, y, z) { 
//   console.log(w,x,y,z)
// }
// const args = [0, 1];
// f(-1, ...args, 2, ...[3]);
//扩展运算符与正常的函数参数可以结合使用

// const x = 10
// const arr = [
//   ...(x > 0 ? ['a'] : []),
//   'b',
// ];
// console.log(arr)
//扩展运算符后面还可以放置表达式
//如果扩展运算符后面是一个空数组，则不产生任何效果
// [...[], 1]
// [1]

//只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
// (...[1, 2])
// Uncaught SyntaxError: Unexpected number
// console.log((...[1, 2]))
// Uncaught SyntaxError: Unexpected number
// console.log(...[1, 2])
// 1 2

// 数组的拓展函数还代替了函数的apply方法
// ES5 的写法
// function f(x, y, z) {
//   console.log(x,y,z)
// }
// var args = [0, 1, 2];
// f.apply(null, args);

// ES6的写法
// function f(x, y, z) {
//   console.log(x,y,z)
// }
// let args = [0, 1, 2];
// f(...args);

// ES5的 写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// const p = Array.prototype.push.apply(arr1, arr2);
// console.log(p)
// // ES6 的写法
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// const p = arr1.push(...arr2)
// console.log(p)


//数组是复合的数据类型，直接复制的话，
//只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组
// const a1 = [1, 2];
// const a2 = a1;
// a2[0] = 2;
// console.log(a1) // 2,2
//浅拷贝

//扩展运算符提供了复制数组的简便写法 // 深拷贝
// const a1 = [1, 2];
// // 写法一
// const a2 = [...a1];
// // 写法二
// const [...a2] = a1;
// a2[0] = 6
// console.log(a2)

// const arr1 = ['a', 'b'];
// const arr2 = ['c'];
// const arr3 = ['d', 'e'];
// ES5 的合并数组
// arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]
// ES6 的合并数组
// [...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
//扩展运算符提供了数组合并的新写法

// const a1 = [{ foo: 1 }];
// const a2 = [{ bar: 2 }];
// const a3 = a1.concat(a2);
// const a4 = [...a1, ...a2];
// 浅拷贝

//扩展运算符可以与解构赋值结合起来，用于生成数组
// ES5
// const list = [5,6,7]
// let a = list[0]
// let rest = list.slice(1)
// ES6
// const [a, ...rest] = list
// console.log(rest)

// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]
// const [first, ...rest] = [];
// first // undefined
// rest  // []
// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []

//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
// const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错
// const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错

// const a = [...'hello']
// console.log(a)
//扩展运算符还可以将字符串转为真正的数组

//有一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符
// 'x\uD83D\uDE80y'.length // 4
// [...'x\uD83D\uDE80y'].length // 3

// let str = 'x\uD83D\uDE80y';

// str.split('').reverse().join('')
// // 'y\uDE80\uD83Dx'

// [...str].reverse().join('')
// // 'y\uD83D\uDE80x'
//上面代码中，如果不用扩展运算符，字符串的reverse操作就不正确


// let nodeList = document.querySelectorAll('div');
// let array = [...nodeList];
//querySelectorAll方法返回的是一个NodeList对象。
//它不是数组，而是一个类似数组的对象

//数组实例find() 和 findIndex()
//数组实例的find方法，用于找出第一个符合条件的数组成员
//它的参数是一个回调函数，所有数组成员依次执行该回调函数，
//直到找出第一个返回值为true的成员，然后返回该成员
//如果没有符合条件的成员，则返回undefined
//[1, 4, -5, 10].find((n) => n < 0)
//上面代码找出数组中第一个小于 0 的成员。

// [1, 5, 10, 15].find(function(value, index, arr) {
//   return value > 9;
// }) // 10
//上面代码中，find方法的回调函数可以接受三个参数，
//依次为当前的值、当前的位置和原数组。

//数组实例的findIndex方法的用法与find方法非常类似，
//返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
// [1, 5, 10, 15].findIndex(function(value, index, arr) {
//   return value > 9;
// }) // 2

//这两个方法都可以接受第二个参数，用来绑定回调函数的this对象
// function f(v){
//   return v > this.age;
// }
// let person = {name: 'John', age: 20};
// [10, 12, 26, 15].find(f, person);    // 26


// includes
//方法返回一个布尔值表示某个数组是否包含给定的值，与字符串的includes方法类似
// [1, 2, 3].includes(2)     // true
// [1, 2, 3].includes(4)     // false
// [1, 2, NaN].includes(NaN) // true

//该方法的第二个参数表示搜索的起始位置，默认为0
//如果第二个参数为负数，则表示倒数的位置，
//如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始
// [1, 2, 3].includes(3, 3);  // false
// [1, 2, 3].includes(3, -1); // true


//数组的flat() 和 flatMap()
//Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。
//该方法返回一个新数组，对原数据没有影响
//[1, 2, [3, 4]].flat()
//上面代码中，原数组的成员里面有一个数组，
//flat()方法将子数组的成员取出来，添加在原来的位置


//flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，
//可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1
// [1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]
// [1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

//如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数
//[1, [2, [3]]].flat(Infinity)

//flatMap()方法对原数组的每个成员执行一个函数
//相当于执行Array.prototype.map()
//然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
// [2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]

//flatMap()只能展开一层数组。