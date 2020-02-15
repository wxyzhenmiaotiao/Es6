import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));



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
async function f() {
    await new Promise(function (resolve, reject) {
        throw new Error('出错了');
    });
}

f()
    .then(v => console.log(v))
    .catch(e => console.log(e))