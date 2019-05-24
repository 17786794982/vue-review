<template>
  <div>
    <h1>vuex</h1>
    <p>count: {{count}}</p>
    <button type="button" @click="addOne">+1</button>
    <p>doneTodos.length = {{doneTodosLength}}</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      // count: state => state.count // 等同于下一行的写法
      count: state => state.test.count,
    }),
    // doneTodosLength() {
    //   return this.$store.getters.doneTodosLength;
    // },
    ...mapGetters(["doneTodosLength"])
  },
  methods: {
    addOne() {
      this.$store.dispatch("increment");
    }
  }
};
</script>

