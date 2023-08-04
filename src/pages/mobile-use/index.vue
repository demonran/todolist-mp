<template>
  <view class="mobile-use">
    <text>玩手机扣积分</text>
    <text>规则： 1积分兑换1小时</text>
    <view v-if="order.id" class="mobile-use-main">
      <text>正在使用手机</text>
      <text>开始时间： {{ order.startTime | formatDate }}</text>
      <text>使用时间：{{ showTime }}</text>
      <button style="width: 100%" type="primary" @click="returnMobile">归还</button>
    </view>
    <div v-else>
      <button style="width: 100%" type="primary" @click="useMobile">使用</button>
    </div>

  </view>
</template>

<script>
import MobileUseApi from "@/api/mobile-use.js";

export default {
  name: "index",
  data() {
    return {
      order: {},
      usedTime: 0,
      timer: null
    }
  },

  mounted() {
    this.initData()
  },

  computed: {
    showTime() {
      const SECOND_CONSTANT = 1000
      const MIN_CONSTANT = SECOND_CONSTANT * 60
      const HOUR_CONSTANT = MIN_CONSTANT * 60
      let hour = Math.floor(this.usedTime / HOUR_CONSTANT)
      let min = Math.floor(this.usedTime / MIN_CONSTANT % 60)
      let second = Math.floor(this.usedTime / SECOND_CONSTANT % 60)

      return hour + " : " + min + " : " + second
    },
  },


  methods: {
    initData() {
      this.closeTimer()
      MobileUseApi.usingMobile().then(data => {
        this.order = data
        this.usedTime = new Date().getTime() - new Date(this.order.startTime).getTime()
        if (this.order.id) {
          this.timer = setInterval(() => {
            this.usedTime += 1000
          }, 1000)
        }
      })
    },

    closeTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },

    useMobile() {
      MobileUseApi.useMobile().then(() => this.initData())
    },
    returnMobile() {
      MobileUseApi.returnMobile({id: this.order.id}).then(() => this.initData())
    },
  },
  beforeDestroy() {
    this.closeTimer()
  }
}
</script>

<style lang="scss" scoped>
.mobile-use {
  display: flex;
  flex-direction: column;

  .mobile-use-main {
    display: flex;
    flex-direction: column;
  }
}
</style>
