<template>
  <view>

    <view class="title">
      <text>{{user.name}}</text>
    </view>
    <task v-for="item in todolist" :task="item" :key="item.id"></task>
  </view>

</template>

<script>
import {dailyTasksByUserId} from "../../api/dailytask.js";
import Task from "../../components/task.vue";

export default {
  name: "index",
  components: {Task},
  data() {
    return {
      todolist: [],
      user: {}
    }
  },
  onLoad(option) {
    const userId = option.userId;
    this.initData(userId)
  },
  methods: {
    initData(userId) {
      dailyTasksByUserId({userId}).then(res => {
        this.todolist = res.dailyTasks
        this.user = res.user;
      })
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 30rpx;
}
</style>
