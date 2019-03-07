<template>
  <section>
    <button @click="forward()">上一页</button>
    <form action>
      <label>
        用户：
        <input type="text">
      </label>
      <label>
        密码：
        <input type="password">
      </label>
      <button type="submit">登录</button>
    </form>
  </section>
</template>
<script>
export default {
  name: "login",
  methods: {
    forward() {
      this.$router.go(-1);
    }
  }
};
</script>

