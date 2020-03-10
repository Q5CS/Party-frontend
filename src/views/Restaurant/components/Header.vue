<template>
  <div class="restaurant-header">
    <div class="user-box">
      <div class="avartar"></div>
      <div class="username">{{ username }}</div>
    </div>
    <div class="info-box">
      <div class="online-user-number">用餐人数：{{ onlineUserNumber }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    onlineUserNumber: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.restaurant-header {
  width: 100vw;
  padding: 2vh 3vw 0 3vw;
  .user-box {
    position: absolute;
    height: 4vh;
    width: 30vw;
    background: $red;
    border-radius: 999px;
    .avartar {
      position: absolute;
      left: 0;
      display: inline-block;
      height: 4vh;
      width: 4vh;
      background: url("https://i.loli.net/2019/11/30/QPkvLqHFXrJepmo.png");
      background-size: cover;
      border-radius: 100%;
      vertical-align: middle;
    }
    .username {
      font-size: 0.9rem;
      color: white;
      margin-left: 3.5vh;
      height: 4vh;
      line-height: 4vh;
      width: calc(30vw - 4vh);
      vertical-align: middle;
      overflow: hidden;
      text-overflow: clip;
    }
  }
  .info-box {
    font-size: 0.9rem;
    color: $white;
    position: absolute;
    right: 9vw;
    height: 4vh;
    line-height: 4vh;
    width: 30vw;
    background: $red;
    border-radius: 999px;
  }
}
</style>
