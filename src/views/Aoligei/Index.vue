<template>
  <div class="aoligei">
    <div class="welcome">
      <img src="@/assets/images/aoligei/welcome.jpg" />
    </div>
    <p>👇👇👇点这里用餐👇👇👇</p>
    <div class="eat" @click="handleEat()">
      <img src="@/assets/images/aoligei/eat.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleEat() {
      alert("用餐愉快！");
      this.$router.push({ path: "/restaurant" });
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.welcome {
  padding: 10px;
}
.eat {
  width: 30%;
  margin: 0 auto;
}
</style>
