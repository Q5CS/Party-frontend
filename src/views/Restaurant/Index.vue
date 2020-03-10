<template>
  <div class="restaurant">
    <Header
      class="header"
      :username="username"
      :onlineUserNumber="onlineUserNumber"
    ></Header>
    <Main
      class="main"
      :algValue="algValue"
      :maxAlgValue="maxAlgValue"
      :allowAdd="allowAdd"
      :allowReduce="allowReduce"
      @addAlgValue="handleAddAlgValue(233)"
      @reduceAlgValue="handleReduceAlgValue(666)"
      ref="main"
    ></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      }[tag] || tag)
  );

export default {
  sockets: {
    connect: function() {
      // console.log("socket connected");
    },
    initData: function(data) {
      this.algValue = data.algValue;
      this.maxAlgValue = data.maxAlgValue;
    },
    errorDetected: function(message) {
      alert(message);
    },
    onlineUserNumber: function(number) {
      // console.log("online user num:", number);
      this.onlineUserNumber = number;
    },
    algValueAdded: function(data) {
      this.$refs.main.sendDanmaku(
        escapeHTML(
          `${data.username} 点了 ${data.item.name}，增加了  ${data.item.value} 点美味值！`
        )
      );
    },
    algValueReduced: function(data) {
      this.$refs.main.sendDanmaku(
        escapeHTML(`${data.username} 吃了一口，减少了 ${data.value} 点美味值！`)
      );
    },
    algValueChanged: function(data) {
      this.algValue = data;
    },
    goToAlgRestaurant: function() {
      alert("美味值已满，请您移步奥利给大酒店用餐！");
      this.$router.push({ path: "/aoligei" });
    }
  },
  data() {
    return {
      algValue: 4333,
      maxAlgValue: 6666,
      onlineUserNumber: 0,
      allowAdd: true,
      allowReduce: true
    };
  },
  computed: {
    username: function() {
      return this.$store.state.username;
    }
  },
  // watch: {
  //   algValue(val) {
  //     if (val >= this.maxAlgValue) {
  //       alert("美味值已满，请您移步奥利给大酒店用餐！");
  //       this.$router.push({ path: "/aoligei" });
  //     }
  //   }
  // },
  components: {
    Header,
    Main,
    Footer
  },
  mounted() {
    this.$socket.emit("getData");
    if (!this.username) {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    handleAddAlgValue() {
      if (!this.allowAdd) return;
      this.$socket.emit("addAlgValue", this.username);
      this.allowAdd = false;
      setTimeout(() => {
        this.allowAdd = true;
      }, 500);
    },
    handleReduceAlgValue() {
      if (!this.allowReduce) return;
      this.$socket.emit("reduceAlgValue", this.username);
      this.allowReduce = false;
      setTimeout(() => {
        this.allowReduce = true;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.restaurant {
  min-height: 100vh;
  background: $background;
  .header {
    position: fixed;
    top: 0;
    z-index: 9999;
  }
  .main {
    padding-top: 10vh;
  }
}
</style>
