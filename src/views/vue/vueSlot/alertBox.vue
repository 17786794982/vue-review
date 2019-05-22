<template>
  <div>
    <strong>Error!</strong>
    <slot>this is init message!</slot>
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
