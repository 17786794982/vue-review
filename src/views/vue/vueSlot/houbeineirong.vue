<template>
  <div>
    <p>有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染</p>
    <alertBox></alertBox>
  </div>
</template>

<script>
  import alertBox from './alertBox'
  
  export default {
    name: "houbeineirong",
    components: {
      alertBox,
    }
  }
</script>

<style scoped>

</style>
