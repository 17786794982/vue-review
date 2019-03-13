<template>
  <div>
    <h2>在组件中使用v-model</h2>
    <code v-text="code1"></code>
    <p>等价于</p>
    <code v-text="code2"></code>
    <hr>
    <code v-text="code3"></code>
    <p>等价于</p>
    <code v-text="code4"></code>
    <pre v-text="code5"></pre>
  </div>
</template>

<script>
  export default {
    name: "componentModel",
    data() {
      return {
        code1: `<input type="text" v-model="msg">`,
        code2: `<input type="text" :value="msg" @input="msg = $event.target.value">`,
        code3: `<custom-input v-model="msg">`,
        code4: `<custom-input :value="msg" @input="msg = $event">`,
        code5:
          `Vue.component('custom-input', {
             props: ['value'],
             template: \`
                <input type="text" :value="value" @input="$emit(input, $event.target.value)"/>
             \`
          })`,
      }
    },
  };
</script>

<style scoped>

</style>
