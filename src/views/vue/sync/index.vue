<template>
  <div>
    <button type="button" @click="isShow = !isShow">{{isShow}}</button>
    <textDocument :isShow.sync="isShow"/>
  </div>
</template>

<script>
  import textDocument from './textDocument';
  
  export default {
    name: "index",
    data() {
      return {
        isShow: true,
      }
    },
    components: {
      textDocument,
    }
  }
</script>

<style scoped>

</style>
