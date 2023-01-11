<template>
  <view class="task-box"  @click="doClick">
    <view class="task-box-content">
        <text class="task-box-content-title">{{ task.title }}</text>
        <text class="task-box-content-subtitle">副标题</text>
    </view>
    <view class="task-box-checkbox" :class="task.done? 'check_active': ''"></view>
  </view>
</template>

<script>
import {doneDailyTask} from "../api/todolist.js";
import {formatDate} from "../utils/util.js";

export default {
  name: "task",
  props: {
    task: {
      type: Object
    }
  },
  methods: {
    doClick() {
      this.$emit('click')
    }
  },

}
</script>

<style lang="scss" scoped>
.task-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 20rpx;
  margin: 20rpx 20rpx;
  border-radius: 20rpx;
  background-color: #414faf;
  color: #ffffff;
  box-shadow: 0 10rpx 0 0 rgba(46, 51, 149);

  .task-box-content {
    display: flex;
    flex-direction: column;

    .task-box-content-title {
      font-size: 35rpx;
    }
    .task-box-content-subtitle {
      font-size: 20rpx;
    }
  }

  .task-box-checkbox {
    width: 40rpx;
    height: 40rpx;
    background-color: #ffffff;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: background-color 0.25s;


  }
  .check_active{
    background: palevioletred;
    border-color: palevioletred;
  }

  .check_active:after{
    content: '';
    display: block;
    width: 30rpx;
    height: 20rpx;
    border: 6rpx solid #fff;
    border-width: 0 0 6rpx 6rpx;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -16rpx;
    margin-left: -16rpx;
    transform: rotate(-45deg);
  }
}

</style>
