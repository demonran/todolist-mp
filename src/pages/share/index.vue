<template>
  <task v-for="item in todolist" :task="item" :key="item.id"></task>
</template>

<script>
import {dailyTasksByUserId} from "../../api/dailytask.js";
import Task from "../../components/task.vue";

export default {
  name: "index",
  components: {Task},
  data() {
    return {
      todolist: []
    }
  },
  onLoad(option) {
    const openId = option.openId;
    this.initData(openId)
  },
  methods: {
    initData(openId) {
      dailyTasksByUserId({openId}).then(res => this.todolist = res)
    }
  }
}
</script>

<style scoped>

</style>
