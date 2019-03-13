<template>
  <div>
    <h2>动态组件 is</h2>
    <ul @click="setComponent($event)">
      <li class="tab-li" :class="setClass('Home')">Home</li>
      <li class="tab-li" :class="setClass('Posts')">Posts</li>
      <li class="tab-li" :class="setClass('Archive')">Archive</li>
    </ul>
    <component :is="component"></component>
  </div>
</template>

<script>
  import vHome from './Home'
  import vPosts from './Posts'
  import vArchive from './Archive'
  
  export default {
    name: "dynamic",
    components: {
      vHome,
      vPosts,
      vArchive,
    },
    data() {
      return {
        component: '',
      };
    },
    methods: {
      setComponent(event) {
        let value = event.target.innerText;
        this.component = `v${value}`;
      },
      setClass(type) {
        return {
          active: this.component === `v${type}`
        }
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  .tab-li {
    cursor: pointer;
    
    &.active {
      color: #157afb;
    }
  }
</style>
