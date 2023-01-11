<template>
  <view style="text-align: center">
    <text style="font-size: 40rpx">{{totalScore}} 分</text>
    <uni-table border stripe emptyText="暂无更多数据" >
      <!-- 表头行 -->
      <uni-tr>
        <uni-th align="center" width="120">日期</uni-th>
        <uni-th align="center" width="150">记录</uni-th>
        <uni-th align="center">奖励</uni-th>
      </uni-tr>
      <!-- 表格数据行 -->
      <uni-tr  v-for="item in scoreRecords" :key="item">
        <uni-td>{{ item.createdAt| formatDate }}</uni-td>
        <uni-td>{{ item.event }}</uni-td>
        <uni-td>{{ item.score }}</uni-td>
      </uni-tr>

    </uni-table>
  </view>
</template>

<script>
import {listScoreRecord} from "@/api/score-record";
import moment from "moment";

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
  filters: {
    formatDate(val) {
      return moment(val).format('YYYY-MM-DD')
    },
  },
  methods: {
    list() {
      listScoreRecord().then(res => {
        this.totalScore = res.totalScore
        this.scoreRecords = res.scoreRecords
      })
    },
  }
}
</script>

<style scoped>

</style>
