<template>
  <div>
    <alertBox>
      Something bad happened. 父组件中的变量：{{msg}}
    </alertBox>
    <strong>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</strong>
  </div>
</template>

<script>
  import alertBox from './alertBox'
  
  export default {
    name: "zuoyongyu",
    data() {
      return {
        msg: 'abc',
      }
    },
    components: {
      alertBox,
    }
  }
</script>

<style scoped>

</style>
