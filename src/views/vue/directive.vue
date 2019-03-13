<template>
  <div>
    <h2>home-router1</h2>
    <div class="big-wrapper">
      <button @click="hasData = !hasData">{{hasData}}</button>
      <div v-nodata="hasData" class="has-data-wrapper">{{hasData}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeRouter1",
  data() {
    return {
      hasData: true
    };
  }
};
</script>
<style>
.big-wrapper {
  padding: 20px;
  background: #159afb;
}
.has-data-wrapper {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background: yellowgreen;
}
</style>

