<template>
  <div class="home">
    <p>欢迎来到泉五火锅城！</p>
    <input
      type="text"
      v-model="username"
      placeholder="请输入用户名"
      maxlength="10"
    />
    <br />
    <br />
    <button @click="enterRestaurant">立即进入</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    enterRestaurant() {
      this.$store.dispatch("setUserName", this.username).then(() => {
        this.$router.push({ path: "/restaurant" });
      });
    }
  }
};
</script>
