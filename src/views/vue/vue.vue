<template>
  <div>
    <ul class="text-center">
      <li>
        <router-link :to="{name: 'directive'}">自定义指令</router-link>
      </li>
      <li>
        <router-link :to="{name: 'componentModel'}">在组件上使用v-model</router-link>
      </li>
      <li>
        <router-link :to="{name: 'vueSlot'}">slot插槽</router-link>
      </li>
      <li>
        <router-link :to="{name: 'dynamic'}">动态组件</router-link>
      </li>
      <li>
        <router-link :to="{name: 'vueProps'}">props</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "vue"
  }
</script>

<style scoped>

</style>
