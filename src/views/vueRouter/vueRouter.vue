<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name: 'homeRouter'}">homeRouter</router-link> |
    <!-- 有时候想要 <router-link> 渲染成某种标签，例如 <button>。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。 -->
    <router-link :to="{name: 'homeRouter2'}" tag="button">homeRouter2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "homeRouter2",
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>
