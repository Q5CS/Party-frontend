<template>
  <div class="restaurant-main">
    <div class="game-wrap">
      <div class="hotpot bigimg" ref="hotpot">
        <img src="@/assets/images/hotpot/bigimg.png" />
      </div>
      <p class="title">美味值</p>
      <div class="hotpot progress">
        <div class="outer-bar">
          <div class="inner-bar" :style="{ width: algPercent + '%' }">
            {{ algValue }} / {{ maxAlgValue }}
          </div>
        </div>
      </div>
      <div class="actions">
        <div
          class="button add"
          @click="$emit('addAlgValue')"
          v-bind:class="{ disabled: !allowAdd }"
        >
          点菜
        </div>
        <div
          class="button reduce"
          @click="$emit('reduceAlgValue')"
          v-bind:class="{ disabled: !allowReduce }"
        >
          吃菜
        </div>
        <!-- <button @click="test">test</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      send: undefined
    };
  },
  mounted() {
    this.send = this.$start(this.$refs.hotpot, [0.5, 0.9]);
  },
  computed: {
    algPercent: function() {
      if (this.algValue < 0) {
        return 0;
      }
      return (this.algValue / this.maxAlgValue) * 100;
    }
  },
  props: {
    algValue: {
      type: Number,
      required: true
    },
    maxAlgValue: {
      type: Number,
      required: true
    },
    allowAdd: {
      type: Boolean,
      default: true
    },
    allowReduce: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    sendDanmaku(text) {
      this.send({
        text: text
      });
    }
  }
};
</script>

<style lang="scss">
.barrage {
  font-size: 1.2rem;
  color: $white;
  // -webkit-text-stroke: 0.5px $white;
  text-shadow: 1px 1px 2px $black;
}
</style>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.game-wrap {
  .title {
    color: $red;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0 0 10px 0;
  }
  .progress {
    padding: 0 3vw;
    .outer-bar {
      width: 100%;
      height: 15px;
      background-color: #f9e1e3;
      border-radius: 999px;
    }
    .inner-bar {
      height: 100%;
      background-color: $red;
      border-radius: 999px;
      text-align: center;
      color: $white;
      line-height: 15px;
      font-size: 0.8rem;
      overflow: hidden;
      transition: width 0.2s ease-in-out;
    }
  }
  .actions {
    display: flex;
    padding: 30px 10px 0 10px;
    .button {
      flex: 1;
      width: 20vw;
      height: 15vw;
      margin: 10px;
      border-radius: 5px;
      font-size: 1.3rem;
      font-weight: bold;
      color: $white;
      line-height: 15vw;
      &.disabled {
        background: $grey;
      }
    }
    .add {
      background: $red;
    }
    .reduce {
      background: $purple;
    }
  }
}
</style>
