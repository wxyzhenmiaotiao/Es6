<template>
  <div>
    <h1>watch和computed</h1>
    <el-input v-model="input" placeholder="请输入"></el-input><el-button @click="add">添加</el-button>
    <h1>几只:{{total}}</h1>
  </div>
</template>

<script>
export default {
  name: 'watch',
  data () {
    return {
      input: '',
      data: [],
      total: 0
    }
  },
  methods: {
    add() {
      this.data.push('')
      // this.data = {
      //   name: 'zhangsan'
      // }
    }
  },
  // computed: { // 计算属性  // 计算属性有缓存，如果值没有发生变化，页面就不会重新渲染。
  //   total() {
  //     return this.data.length
  //   }
  // },
  
  watch: { // 监听器 // 默认情况下watch不执行 需要加immediate: true  当你所使用的数据复杂时 就需要使用deep这个属性
    data: {
      handler: function(newValue,oldValue) {
        // console.log(newValue,oldValue)
        this.total = this.data.length + '只'
      },
      immediate: true,
      deep: true,
    },
  }
}
</script>
 <!-- 总结：在项目中如果可以使用computed实现想要的结果就使用computed，因为他写法简洁还具有缓存性可以优化项目性能，
  watch需要申明变量，还得需要添加代码才可以初始化加载。
  当面试的时候可以这样回答，如果一个值发生了变化后需要做很多事情的话，就用watch。
  如果一个值是其他值计算得来的，其他值变了这个值也需要变的话，就用computed。 -->
<style scoped>

</style>
