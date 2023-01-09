<template>
  <view style="text-align: center">
    <text style="font-size: 40rpx">{{totalScore}} 分</text>
  </view>
</template>

<script>
import {listScoreRecord} from "@/api/score-record";

export default {
  name: "index",
  data() {
    return {
      totalScore: 0,
      scoreRecords: []
    }
  },
  onShow() {
    this.list()
  },

  methods: {
    list() {
      listScoreRecord().then(res => {
        this.totalScore = res.totalScore
        this.scoreRecords = res.scoreRecord
      })
    },
  }
}
</script>

<style scoped>

</style>