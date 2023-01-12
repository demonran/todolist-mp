<template>
  <view class="score-wrapper">
    <view class="total-score">
      剩余总分：
      <text class="total-score-content" >{{totalScore}} 分</text>
    </view>
    <view class="detail">
      <view class="detail-item"  v-for="item in scoreRecords" :key="item">
        <view class="detail-item-title">
          <text>{{item.event}}</text>
          <text class="detail-item-title-time">{{ item.createdAt | formatDate }}</text>
        </view>
        <text>{{item.score > 0 ? '+': '-'}}{{ item.score }}分</text>
      </view>
    </view>
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

<style lang="scss" scoped>
.score-wrapper {
  padding: 10rpx 40rpx;
}
.total-score {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: rgb(241 229 229) solid 2rpx;;

  .total-score-content {
    font-size: 60rpx;
    color: #007aff;
  }
}
.detail {
  .detail-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30rpx 20rpx;
    border-bottom: rgb(241 229 229) solid 2rpx;;

    .detail-item-title {
      display: flex;
      flex-direction: column;

      .detail-item-title-time {
        font-size: 20rpx;
        color: #8f8f94;
      }
    }
  }
}
</style>
