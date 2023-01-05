<template>
  <uni-list>
    <uni-list-item v-for="item in list" :key="item.id" :title="item.title"></uni-list-item>
    <TodoItem></TodoItem>
  </uni-list>
</template>

<script>
import {listTodolist} from "../../api/todolist.js";
import TodoItem from "./todo-item.vue";
export default {
  name: "index",
  components: {TodoItem},
  data() {
    return {
      list: []
    }
  },
  onLoad() {
    this.initData()
  },
  methods: {
    initData() {
      listTodolist().then(res => this.list = res)
    }
  }
}
</script>

<style scoped>

</style>
