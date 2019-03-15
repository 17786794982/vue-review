<template>
  <div>
    <strong>Error!</strong>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "alertBox",
    data() {
      return {
        msg: 'bcd',
      }
    }
  }
</script>

<style scoped>

</style>
