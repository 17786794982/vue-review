<template>
  <div>
    <h2>slot 插槽</h2>
    <alertBox>
      Something bad happened. {{msg}}
    </alertBox>
    <strong>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</strong>
  </div>
</template>

<script>
  import alertBox from './alertBox'
  
  export default {
    name: "vueSlot",
    data(){
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
