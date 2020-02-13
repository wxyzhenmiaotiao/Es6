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

  
