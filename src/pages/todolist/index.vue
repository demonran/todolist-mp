<template>
  <view>
    <TodoItem v-for="item in list" :key="item.id" :item="item"></TodoItem>
    <uni-fab ref="fab" horizontal="right" @trigger="trigger" :content="content"/>
  </view>
</template>

<script>
import {listTodolist} from "../../api/todolist.js";
import TodoItem from "./todo-item.vue";
export default {
  name: "index",
  components: {TodoItem},
  data() {
    return {
      list: [],
      content: [
        {
          text: '添加任务',
          active: false
        },
      ]

    }
  },
  onShow() {
    this.initData()
  },
  methods: {
    initData() {
      listTodolist().then(res => this.list = res)
    },
    trigger(e) {
      if (e.index == 0) {
        uni.navigateTo({
          url: "/pages/todolist/add"
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
