<template>
  <view class="task-box" :class="task.done? 'done': ''" @click="doClick">
    <view>{{ task.title }}</view>
    <view>
      <text style="padding-right: 10rpx">{{ task.done ? '已完成' : '未开始' }}</text>
      <uni-icons v-if="task.done" type="checkmarkempty" color="#4cd964" size="20"></uni-icons>
      <uni-icons v-if="!task.done" type="circle"  size="20"></uni-icons>
    </view>
    <!--    <view>{{task.date}}</view>-->
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

<style scoped>
.task-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20rpx 0;
  font-size: 25rpx;
  border: solid 0.5rpx #e5e5e5;
}

.done {
  color: #4cd964;
}

</style>
