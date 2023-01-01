<template>
  <uni-list>
    <uni-list-item v-for="item in list" :title="item.title"></uni-list-item>
  </uni-list>
</template>

<script>
import {listTodolist} from "../../api/todolist.js";

export default {
  name: "index",
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
