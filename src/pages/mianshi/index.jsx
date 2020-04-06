// JS 事件 冒泡捕获
// 绑定事件的方法(两种方法) DOM1 级事件
// 1.节点.onclick = function () {

// } // 缺点后面注册的事件会覆盖前面注册的事件
// 2. DOM2 级事件   三个阶段(捕获阶段---》目标阶段----》冒泡阶段)
// 节点。addEventListener('事件',function() {

// }false || true)
// true----捕获   false---冒泡
// const div = document.querySelector('.box')
//     const p = document.querySelector('.p')
//     const span = document.querySelector('.span')
//     const fn = function (event) {
//     	event.preventDefault() //阻止默认事件
//     	event.stopPropagation() // 阻止冒泡
//         console.log(event.target) // 
//         console.log(event.currentTarget) //获取注册事件节点
//         console.log('-----------------------------')
//     }
//     //事件绑定
//     // div.addEventListener('click',fn,true)
//     // p.addEventListener('click',fn,true)
//     // span.addEventListener('click',fn,true)

//     div.addEventListener('click',fn,false)
//     // p.addEventListener('click',fn,false)
//     // span.addEventListener('click',fn,false)

// 	//事件解绑
//     div.removeEventListener('click',fn,false)


// 为什么会跨域  
// 首先跨域是因为浏览器的的同源策略，
// 同源策略就是指 ：
// 协议相同http https  ， 域名相同 www.baidu.com  ， 端口相同 80
// 解决跨域  jsonp的方法 script里面写网址  回调函数把数据给前台
// 后台设置请求头 
// webpack-dev-serve    这是node的一个中间件
// 使用这个来搭建一个node服务器 然后让node请求后台 node时本地的相当于就是后台 后台请求后台时不会跨域的 


// redux三大基本原则：
// store 单一数据源 
// state 在页面里只是只读的 触发action 然后 修改 state
// state 只能在reduce里面改 并且reduce 必须是纯函数

// 请求数据使用componentDidmount()
// 接受的props改变state 需要使用
// componentWillReceiveProps() 或者componentWillmount()
// 当你render函数需要有数据在渲染额时候就在componentWillmount()
// 当你render函数不要数据 需要先渲染的时候就在componentWillmount()
// shuodComponentUpdata() 他有两个返回值 ture false true才会重新渲染页面 false不会渲染页面
// 而且必须要有一个返回值 要不就报错了
// Purecomponent() 他们两个效果是一样的  会比较当前的值和下一步的值是否相等 要是不一样的话就会执行reder()  要是一样的话就不会执行reder() 基本类型比较值 引用类型比较内存地址


// promise 几种状态
// 三种: 初始化       成功     失败  
//          pending   resolve  reject


// 深拷贝   lodash（ _.cloneDeep() ）    JSON.parse(JSON.stringify())   递归


// redux触发流程
// view -> action -> reduce
// 用户在视图中引发action在action里面触发reduce进行state操作，修改完成state在重新渲染到页面上去
// redux创建store (createStore.js)
// reducer    applyMiddleware
// 1.单一数据源 一个项目只有一个store
// 2.state 在页面里面是只读的 需要触发action来修改state
// 3. state是只读的 纯函数 只能用reducer修改

//深拷贝
// lodash 递归 
//Object.assign() 合并对象使用

//es6新特性:
// 块级作用域 let const
// 新增基本数据类型symbol
// 结构赋值
// 箭头函数 还可以给函数中的形参默认值
// String的include方法 includes("元素") 用于判断字符串中是否包含某个字符
// isArray() 判断是否是数组的方法
// 新增模块化（import/export）
// import是引入
// export导出变量，模块，函数等
// set get
// set包含的方法 add()、has()、delete()、clear()
// get(key)根据key值取得value
// for...of for...in

// CSS盒模型
// 就是CSS的一种模块,它定义了一种长方形的盒子,包括他们各自的内边距,
// 和外边距,并根据视觉格式化来生成元素对其进行布局,编译

// 当两个请求都完成时 在进行返回
// promise。all([a1,a2])
	//.then(res => {console.log(res)})

// const a1 = () => {
//   return new Promise(resolve => {
//     post()
//       .then(res => resolve(res))
//   })
// }
// const a2 = () => {
//   return new Promise(resolve => {
//     post()
//       .then(res => resolve(res))
//   })
// }
// async function A () {
//   const d = Promise.all([a1, a2])
//   return d
// }


// console.log(1)
// console.log(2)
// console.log(3)