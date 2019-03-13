<template>
  <section>
    <button @click="forward()">上一页</button>
    <form @submit.prevent="submit">
      <div>
        <label for="user">用户：</label>
        <input type="text" id="user" v-model.trim="user">
      </div>
      <div>
        <label for="pwd">密码：</label>
        <input type="password" id="pwd" v-model="pwd">
      </div>
      <div>
        <button type="submit">登录</button> |
        <router-link :to="{name: 'register'}" tag="button">注册</router-link>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      user: '',
      pwd: '',
    }
  },
  methods: {
    forward() {
      this.$router.go(-1);
    },
    submit() {
      console.log(this.user, this.pwd);
    }
  }
};
</script>

