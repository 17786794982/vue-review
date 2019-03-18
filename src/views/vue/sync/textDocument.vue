<template>
  <div v-show="isShow">
    <div>text-document</div>
    <button type="button" @click="close()">close</button>
  </div>
</template>

<script>
  export default {
    name: "textDocument",
    props: {
      isShow: Boolean,
    },
    methods: {
      close() {
        this.$emit('update:isShow', false);
      }
    }
  }
</script>

<style scoped>

</style>
