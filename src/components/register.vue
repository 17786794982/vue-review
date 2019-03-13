<template>
  <section>
    <h2>修饰符 trim/number</h2>
    <button @click="forward()">上一页</button>
    <form @submit.prevent="submit">
      <div>
        <label for="user">用户：</label>
        <input type="text" id="user" v-model.trim="user">
      </div>
      <div>
        <label for="user">手机：</label>
        <input type="tel" id="tel" v-model.number="tel">
      </div>
      <div>
        <label for="pwd">密码：</label>
        <input type="password" id="pwd" v-model="pwd">
      </div>
      <div>
        <button type="submit">注册</button> |
        <router-link :to="{name: 'login'}" class="login-in">如有账号，点击登录</router-link>
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
        tel: '',
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
<style lang="less" type="text/less" scoped>
  .login-in {
    font-size: 10px;
    cursor: pointer;
    
    &:hover {
      color: #157afb;
    }
  }
</style>
