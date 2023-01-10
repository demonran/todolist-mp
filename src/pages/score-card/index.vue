<template>
  <view style="text-align: center">
    <text style="font-size: 40rpx">0 分</text>
    <uni-table border stripe emptyText="暂无更多数据" >
      <!-- 表头行 -->
      <uni-tr>
        <uni-th align="center" width="120">日期</uni-th>
        <uni-th align="center" width="150">记录</uni-th>
        <uni-th align="center">奖励</uni-th>
      </uni-tr>
      <!-- 表格数据行 -->
      <uni-tr  v-for="item in data" :key="item">
        <uni-td>{{ item.time }}</uni-td>
        <uni-td>{{ item.record }}</uni-td>
        <uni-td>{{ item.score }}</uni-td>
      </uni-tr>

    </uni-table>
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
