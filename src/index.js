import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './pages/225';

ReactDOM.render(<App1 />, document.getElementById('root'));

console.log(1)

//promise 有两个参数
// const promise = new Promise(function (resolve, reject) {
//   if (false) {
//     resolve('成功');
//   } else {
//     reject('失败');
//   }
// });
// 
// promise
//   .then(function(value){
//成功
//     console.log(value)
//   },function(error){
//失败
//     console.log(error)
//   })

//
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(3000).then(res => {
//   console.log(res);
// });


//then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
// let promise = new Promise(function (resolve, reject) {
//   console.log('Promise');
//   //微任务
//   resolve();
// });

// promise.then(function () {
//   console.log('resolved.');
// });

// console.log('Hi!');

// new Promise((resolve, reject) => {
//   resolve(1);
//   console.log(2);
// }).then(r => {
//   console.log(r);
// });


// p.then((val) => console.log('fulfilled:', val))
//   .catch((err) => console.log('rejected', err));

// // 等同于
// p.then((val) => console.log('fulfilled:', val))
//   .then(null, (err) => console.log("rejected:", err));

// const promise = new Promise(function (resolve, reject) {
//   throw new Error('test');
// });
// promise.catch(function (error) {
//   console.log(error);
// });


// 写法一
// throw new Error('test'); 抛出异常
//try {
//   供测试的代码块
// }
//  catch(err) {
//      处理错误的代码块
// } 
// const promise = new Promise(function(resolve, reject) {
//   resolve('11')
//   try {
//     throw new Error('test');
//   } catch(e) {
//     reject(e)
//   }
// });
// promise
// .then(res => {
//   console.log(res)
// })
// .catch(function(error) {
//   console.log(error);
// });
//这两个道理一样
// // 写法二
// const promise = new Promise(function(resolve, reject) {
//   reject(new Error('test'));
// });
// promise.catch(function(error) {
//   console.log(error);
// });




// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//     // resolve(2)
//   });
// };

// someAsyncThing()
// .catch(function(error) {
//   console.log('oh no', error);
// })
// .then(function() {
//   console.log('carry on');
// });



// Promise.resolve()
// .catch(function(error) {
//   console.log('oh no', error);
// })
// .then(function() {
//   console.log('carry on');
// });
// 这样写就算返回值报错 也和catch没有关系
// Promise.resolve(a)
// .catch(function(error) {
//   console.log('oh no', error);
// })
// .then(function() {
//   console.log('carry on');
// });



//小程序代码 ↓

//父传子  路径传参 和 跳转页面

//组件名 images 组件名不能使用关键字
//父 使用组件 要加引号和两个大括号。
//<images data="{{result}}" />  
//result 这个值在父的js文件里

//组件的js文件
//properties 里面
// data: {
//   type: 'Object',
//   value: {}
// }

//子 直接使用就行
// <view class="com_img">
//   <image src="{{data.imageUrl}}" mode="aspectFill" />
//   <text>{{data.name}}</text>
// </view> 



// 路径传参
//在wxml设置点击事件 使用下面的代码进行传参
//wx.navigateTo({
//   url: '/pages/login/login?name=wxy&age=20',
// })
//跳转到后获取值
// onLoad: function (options) {
//   console.log(options)
// }

//跳转页面
//两种方式
//标签类型
// <navigator open-type="switchTab" url="/pages/detail/datail">
//   <images />
// </navigator>
//事件类型 
// wx.navigateTo({
//   url: '/pages/login/login',
// })







//第二天


//Promise的基本用法
// const p = Promise.all([p1, p2, p3]);
// p的状态由p1、p2、p3决定，分成两种情况 
// 当这三个都是undefined的时候p就是undefined
// 三个中只要有一个被reject p的状态就会被reject


// const p1 = new Promise((resolve, reject) => {
//   resolve('hello')
// })
//   .then(result => result)
//   .catch(e => e)

//   const p2 = new Promise((resolve, reject) => {
//     throw new Error('报错了')
//   })
//     .then(result => result)
//     .catch(e => e)

// Promise.all([p1,p2])
//   .then(result => console.log(result))
//   .catch(e => console.log(e))

//p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，
//p2指向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，
//导致Promise.all()方法参数里面的两个实例都会resolved，
//因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数


//下面这个相反p2没有自己的catch 就走了all的catch
// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// })
// .then(result => result);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// })
// .then(result => result);

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));



//promise.race()
//Promise.race()方法的参数与Promise.all()方法一样 但是作用是相反的
// 三个第一个改变状态的 p的状态就会跟着改变



// Promise.allSettled()  接收一组Promise 实例作为参数 包装成一个新的
// Promise()实例 等这些参数都执行完毕 才会结束

// const resolved = Promise.resolve(42);
// const rejected = Promise.reject(-1);

// const allSettledPromise = Promise.allSettled([resolved, rejected]);

// allSettledPromise.then(function (results) {
//   console.log(results);
// })
//成功不会返回resolve 而是fulfilled 因为传入的是对象 都执行完毕后也是返回一个数组


//promise.resolve()
// Promise.resolve('foo')
//   .then(res => console.log(res))
// // 等价于
// new Promise(resolve => resolve('foo'))

// promise.resolve()
// const thenable = {
//   then(resolve, reject) {
//     reject('出错了');
//   }
// };

// Promise.reject(thenable)
// .catch(e => {
//   console.log(e === thenable)
// })




//async 传参
// const fn1 = time => {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve('小花')
//       }, time )
//   })
// }
// async function fn (value) {
//   await fn1(value)
//   return fn1()
// }   
// fn(1000)
//   .then(res => console.log(res))


//小程序
//子传父 
//子
//<button bind:tap="onTap">点我</button> 添加一个时间
//子 js 要写在methods里面
// methods: {
//   onTap(evt) {
//     console.log(evt,1111)
//     this.triggerEvent('onClick',{
//       name: '笑话',
//       age: 25
//     })
//   },
// }

//父 
//<images data="{{result}}" bind:onClick="onClick" /> 调用它添加事件
//父 js
// onClick(options) {
//   console.log(Object.prototype.toString.call(this.data.result));
//   console.log(this.data.result)
//   console.log(options.detail)
//   const { result } = this.data
//   this.setData({
//     result : {
//       imageUrl: result.imageUrl,
//       name: '小花'
//     }
//   })
// },




//第三天
//async
//必须要return
// const fn1 = time => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('小花')
//         }, time )
//     })
// }
// async function fn (value) {
//     const p1 =  await fn1(value)
//     return p1
// }   
// fn(1000)
//     .then(res => console.log(res))

//
// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value)
// }

// asyncPrint('hello world', 50)


//async 函数有多种使用形式。

// 函数声明
// async function foo() { }

// // 函数表达式
// const foo = async function () { };

// // 对象的方法
// let obj = { async foo() { } };
// obj.foo().then(...)

// // Class 的方法
// class Storage {
//     constructor() {
//         this.cachePromise = caches.open('avatars');
//     }

//     async getAvatar(name) {
//         const cache = await this.cachePromise;
//         return cache.match(`/avatars/${name}.jpg`);
//     }
// }

// const storage = new Storage();
// storage.getAvatar('jake').then(…);

// // 箭头函数
// const foo = async () => { };

//返回Promise 对象 async函数内部return语句返回的值，会成为then方法回调函数的参数
// async function f() {
//     return 'hello world';
// }

// f()
//     .then(v => console.log(v))

//async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态
// async function f() {
//     throw new Error('出错了');
// }

// f().then(
//     v => console.log(v),
//     e => console.log(e)
// )


//只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数


// await 命令
//await命令后面是一个 Promise 对象，
//返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
// async function f() {
//     // 等同于
//     // return 123;
//     return await 123;
// }
// f().then(v => console.log(v))


// class Sleep {
//     constructor(timeout) {
//         this.timeout = timeout;
//     }
//     then(resolve, reject) {
//         const startTime = Date.now();
//         setTimeout(
//             () => resolve(Date.now() - startTime),
//             this.timeout
//         );
//     }
// }
// (async () => {
//     const sleepTime = await new Sleep(1000);
//     console.log(sleepTime);
// })();
// await命令后面是一个Sleep对象的实例。
// 这个实例不是 Promise 对象，
// 但是因为定义了then方法，await会将其视为Promise处理


// 上面代码中，await语句前面没有return，
// 但是reject方法的参数依然传入了catch方法的回调函数。
// 这里如果在await前面加上return，效果是一样的
// async function f() {
//     await Promise.reject('出错了');
// }

// f()
//     .then(v => console.log(v))
//     .catch(e => console.log(e))

//即使前一个异步操作失败，也不要中断后面的异步操作
// async function f() {
//     await Promise.reject('出错了')
//         .catch(e => console.log(e))
//     return await Promise.resolve('hello world')
// }

// f()
//     .then(v => console.log(v))


// async 错误操作
//如果await后面的异步操作出错，
//那么等同于async函数返回的 Promise 对象被reject
// async function f() {
//     await new Promise(function (resolve, reject) {
//         throw new Error('出错了');
//     });
// }

// f()
//     .then(v => console.log(v))
//     .catch(e => console.log(e))


//顶层 await 
//根据语法规格，await命令只能出现在 async 函数内部，否则都会报错
// const data = await fetch('https://api.example.com');









// 2月18号  

//3秒后输出1，再过3秒输出2，
//要求使用 Promise 实现效果，输出的1，2必须在promise的then中输出
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(1)
//     }, 3000)
// })
//     .then(res => {
//         console.log(res)
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 console.log(2)
//             }, 3000)
//         })
//     })


//接口：https://blogs.zdldove.top/Home/Apis/listWithPage。
//按顺序调用2次该接口，第一次调用完有以后，再调用第二次，要求使用async实现。
// const ajax = () => {
//     return axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage')
// }
// const fn = async function () {
//     const p1 = await ajax()
//     const p2 = await ajax()
//     return [p1,p2]
// }
// fn() 
//     .then(res => console.log(res))

//接口: https://blogs.zdldove.top/Home/Apis/listWithPage. 
//调用2次该接口，要求2次接口全部请求成功后。输出2次接口返回的内容
// const ajax = () => {
//     return axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage')
// }
// const p1 = Promise.all([ajax(), ajax()])
// p1
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


//实现一个类，包含name, age 2个属性，一个method方法，
//实例化时传入name,age参数，调用实例的method方法输出该实例的name和 age值. 使用class实现
// class P1 {
//     constructor(a, b){
//         this.name = a
//         this.age = b
//     }
//     method() {
//         console.log(this.name, this.age)
//     }
// }
// const p1 = new P1('小红',11)
// p1.method()

//有一个对象，内容如下，该对象内容数量不定，要求封装一个方法，
//传入参数如果是h1,输出这个对象key为h1的值，传入参数是h2输出这个对象为h2的值，
//传入参数为 h9, 输出obj对象key为h9的值。
// const obj = {
//     h1: '我是H1',
//     h2: '我是H2',
//     h3: '我是H3',
// }
// function pri (opt) {
//     console.log(obj[opt])
// }
// pri('h2')


//判断是不是对象 Object.prototype.toString.call(obj)




//2.19

///////         对象的拓展
//属性的简洁表达式
//1.
//能在对象里面直接写变量和函数 
//总的来说 就是简写对象 
// const foo = 'bar';
// const baz = { foo };
// const baz = { foo: foo };

// function f(x, y) {
//     return { x, y };
// }
// console.log(f(1,2)) 
// 打印结果 {x: 1, y: 2}

// const o = {
//     method() {
//         return "Hello!";
//     }
// };
//等同于
// const o = {
//     method: function () {
//         return "Hello!";
//     }
// };

// let birth = '2000/01/01';

// const Person = {
//     name: '张三',
//     //等同于birth: birth
//     birth, 
//     // 等同于hello: function ()...
//     hello() { 
//         // console.log('我的出生日期', this.birth); 
//         console.log('我的名字是', this.name); 
//     }
// }
// Person.hello()

// function getPoint() {
//     const x = 1;
//     const y = 10;
//     return { x, y };
// }
// console.log(getPoint())
//{x: 1, y: 10}

// let ms = {};
// function getItem(key) {
//     return key in ms ? ms[key] : null;
// }
// function setItem(key, value) {
//     ms[key] = value;
// }
// function clear() {
//     ms = {};
// }
//上面的不是重点
// module.exports = { getItem, setItem, clear };
// 等同于
// module.exports = {
//     getItem: getItem,
//     setItem: setItem,
//     clear: clear
// };

// const cart = {
//     _wheels: 3,
//     get wheels() {
//         return 1;
//     },
//     set wheels(value) {
//         if (value < this._wheels) {
//             throw new Error('数值太小了！');
//         }
//         this._wheels = value;
//     }
// }
// console.log(cart.wheels)

// let user = {
//     name: 'test'
// };
// let foo = {
//     bar: 'baz'
// };
// console.log(user, foo)
// {name: "test"} {bar: "baz"}
// console.log({ user, foo })
// {user: {name: "test"}, foo: {bar: "baz"}}
//每组键值对前面会打印对象名，这样就比较清晰了


//2.属性名表达式

// const obj = {
//     name: '王潇瑜',
//     age: 20
// }
// obj.foo = true;
// 方法二
// obj['a' + 'ge'] = 22;
// console.log(obj.age)
//上面代码的方法一是直接用标识符作为属性名，
//方法二是用表达式作为属性名，这时要将表达式放在方括号之内
// let NAME = "name"
// let AGE = "age"
// const obj = {
//     [NAME]: '王潇瑜',
//     [AGE]: 20
// }
// console.log(obj[NAME])
// console.log(obj.age)

// let lastWord = 'last word';

// const a = {
//     'first word': 'hello',
//     [lastWord]: 'world'
// };
// console.log(a[lastWord]) //world
// console.log(a['first word']) // hello
// console.log(a['last word']) //world

// const HELLO = 'asd'
// let obj = {
//     [HELLO]() {
//         return 'hi';
//     }
// };
// console.log(obj.asd())
// 表达式还可以用于定义方法名

//注意，属性名表达式与简洁表示法，不能同时使用，会报错
// const foo = 'bar';
// const bar = 'abc';
// const baz = { [foo] }; 
//报错 ↑
// const foo = 'bar';
// const baz = { [foo]: 'abc' };
// 正确 ↑

// const keyA = { a: 1 };
// const keyB = { b: 2 };
// const myObject = {
//     [keyA]: 'valueA',
//     [keyB]: 'valueB'
// };
// console.log(myObject) //Object {[object Object]: "valueB"}
//上面代码中，[keyA]和[keyB]得到的都是[object Object]，
//所以[keyB]会把[keyA]覆盖掉，
//而myObject最后只有一个[object Object]属性


//方法的name属性
// const person = {
//     sayName() {
//         console.log('hello!');
//     },
// };
// console.log(person.sayName.name)

//如果使用了getter 或者 setter 取值函数 和 存值函数 
//就不能直接取函数的name 要写成下面函数那样子
// const obj = {
//     get foo() { },
//     set foo(x) { }
// };
//console.log(obj.foo.name) // 错误
// const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
// console.log(descriptor.get.name)
// console.log(descriptor.set.name)

//有两种特殊情况：bind方法创造的函数，
//name属性返回bound加上原函数的名字；Function构造函数创造的函数，
//name属性返回anonymous
// (new Function()).name // "anonymous"

// var doSomething = function() {
//   // ...
// };
// doSomething.bind().name // "bound doSomething"

//如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述
// const key1 = Symbol('description');
// const key2 = Symbol();
// let obj = {
//   [key1]() {},
//   [key2]() {},
// };
// obj[key1].name // "[description]"
// obj[key2].name // ""





// 对象的拓展运算符
//结构赋值
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// x // 1
// y // 2
// z // { a: 3, b: 4 }

//由于解构赋值要求等号右边是一个对象，
//所以如果等号右边是undefined或null，
//就会报错，因为它们无法转为对象
// let { ...z } = null; // 运行时错误
// let { ...z } = undefined; // 运行时错误
// 解构赋值必须是最后一个参数，否则会报错。
// let { ...x, y, z } = someObject; // 句法错误
// let { x, ...y, ...z } = someObject; // 句法错误

// let obj = { a: { b: 1 } };
// let { ...x } = obj;
// obj.a.b = 2;
// x.a.b // 2
//上面代码中 进行的就是一个 浅拷贝的作用

// let o1 = { a: 1 };
// let o2 = { b: 2 };
// o2.__proto__ = o1;
// let { ...o3 } = o2;
// o3 // { b: 2 }
// o3.a // undefined
//另外，扩展运算符的解构赋值，不能复制继承自原型对象的属性
//03复制了02 只是复制了02的自身的属性 没有复制他的01的原型对象的属性

// const o = Object.create({ x: 1, y: 2 });
// console.log(o)
// o.z = 3;

// let { x, ...newObj } = o;
// let { y, z } = newObj;
// x // 1
// y // undefined
// z // 3
//x 结构出来就能获取到  然后y,z都是结构出来的对象 z可以赋值成功是因为z是o对象本身的属性
//y不是本身的属性 所以没有赋值出来。

//拓展运算符
// let z = { a: 3, b: 4 };
// let n = { ...z };
// console.log(n)
//{a: 3, b: 4}


//由于数组是特殊的对象，所以对象的扩展运算符也可以用于数组。
// let foo = { ...['a', 'b', 'c'] };
// console.log(foo)

//如果扩展运算符后面是一个空对象，则没有任何效果。
// {...{}, a: 1}
// { a: 1 }

//如果扩展运算符后面不是对象，则会自动将其转为对象
// const a = {...1}
// console.log(a)
//上面代码中，扩展运算符后面是整数1，会自动转为数值的包装对象Number{1}。
//由于该对象没有自身属性，所以返回一个空对象

//对象的扩展运算符等同于使用Object.assign()方法
// let aClone = { ...a };
// // 等同于
// let aClone = Object.assign({}, a);

// const a= {
//     name: 'giao',
//     x: '老外'
// }
// const b= {
//     name: '老八'
// }
// let ab = { ...a, ...b };
// console.log(ab) //{ name: '老八' }
//如果用户自定义的属性，
//放在扩展运算符后面，
//则扩展运算符内部的同名属性会被覆盖掉

// let aWithDefaults = { x: 1, y: 2, ...a };
// console.log(aWithDefaults)
//如果把自定义属性放在扩展运算符前面，就变成了设置新对象的默认属性值

// const x = 0
// const obj = {
//     ...(x > 1 ? { a: 1 } : {}),
//     b: 2,
// };
// console.log(obj)
//与数组的扩展运算符一样，对象的扩展运算符后面可以跟表达式。

// const obj = {
//   name: '小花',

//   age: {
//     xxx: 1
//   },

//   abc: undefined,
// }
// const newobj = JSON.parse(JSON.stringify(obj))
//这种方法undefined没有输出出来
// const newobj = { ...obj }
// newobj.abc = 123
//这个方法是前拷贝
// console.log(newobj.abc)
// const arr = [1,[2,3,[5]]]
// console.log(arr.flat(Infinity))