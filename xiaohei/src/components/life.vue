<template>
	<div>
	  <h1>生命周期</h1>
	</div>
  </template>
  
  <script>

  export default {
		name: 'life',
		data () {
			return {
				courses: []
			}
		},
		// beforeCreate 初始化 事件 生命周期
		// created 可以用来接收服务器的数据或者父组件的数据，或者用来判断传入的数据是否是规定的数据类型是否和data中的数据有冲突之类的。
		// beforeMount 创建完成了 一切准备就绪 数据和$el都可以使用
		// mounted 展示dom 把data数据也挂载到dom节点中去 挂载完毕了  
		// ↑↑↑↑↑↑↑↑↑↑↑ 到这里第一阶段就结束了
		// beforeUpdate 虚拟dom修改之前执行这个 要是想在修改之前给之前的状态做一个记录 就可以用这个
		// update 和上面相反 要是想要在虚拟dom修改之后干一些事情就可以用这个
		// beforeDestroy 但你直接调用$destroy()要去直接销毁当前的组件的话 也不会直接销毁的 他会执行这个钩子
		// destroyed 到这儿就要啥没啥了  就是真的执行完了 
		// ↑↑↑↑↑↑↑↑↑↑↑ 完结   
		// 页面初始化时会执行beforeCreate,created,beforeMount,mounted
		// 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成识图。
		// async created() {
		// 	const data = await getData()
		// 	this.courses = data
		// 	console.log(this.courses)
		// },
		// 在模板渲染成html后调用，通常初始化页面完成后，再对html的dom节点进行一些需要的操作。
		mounted() {}
		// ↑↑↑↑↑↑↑↑↑↑↑↑ 其实这俩都可以用来请求接口数据，但是根据每个钩子不同的特性来使用会更好一些。
		

  }
	function getData() {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(['番茄','香蕉','苹果'])
			},2000)
		})
	}
  </script>
  <style scoped>
  
  </style>
  