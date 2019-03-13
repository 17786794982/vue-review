<template>
  <div>
    <h2>slot 插槽</h2>
    <alertBox>
      Something bad happened.
    </alertBox>
  </div>
</template>

<script>
  import alertBox from './alertBox'
  
  export default {
    name: "vueSlot",
    components: {
      alertBox,
    }
  }
</script>

<style scoped>

</style>
