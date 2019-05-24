<template>
  <div id="app">
    <div id="nav" class="text-center">
      <router-link to="/">Home</router-link>|
      <router-link :to="{name: 'directive'}">vue</router-link>|
      <router-link :to="{name: 'homeRouter'}">vue-router</router-link>|
      <router-link to="/vuex">vuex</router-link>
    </div>
    <router-view class="main-wrapper"/>
  </div>
</template>
<script>
export default {
  created() {
    const env = process.env;
    console.log(env);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.main-wrapper {
  width: 800px;
  margin: 0 auto;
}
</style>
