<template>
  <view>
    <TodoItem v-for="item in list" :key="item.id" :item="item" @change="changeStatus"></TodoItem>
    <uni-fab ref="fab" horizontal="left" @trigger="trigger" :content="content"/>
  </view>
</template>

<script>
import {changeTodolistStatus, listTodolist} from "../../api/todolist.js";
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
        }
      ]

    }
  },
  onShow() {
    this.initData()
  },

  methods: {
    initData() {
      listTodolist().then(res => this.list = res.sort((a, b) => b.status - a.status))
    },
    changeStatus(id, status) {
      changeTodolistStatus({id: id, status: status}).then(res => console.log(res))
    },
    trigger(e) {
      if (e.index === 0) {
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
