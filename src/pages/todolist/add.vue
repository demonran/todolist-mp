<template>
    <view>
      <uni-forms ref="valiForm">
        <uni-forms-item label="标题" required>
          <uni-easyinput v-model="form.title" placeholder="请输入标题" />
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="submit('valiForm')">提交</button>
    </view>
</template>

<script>
import {addTodolist} from "@/api/todolist.js";
export default {
  name: "add.vue",

  data() {
    return {
      form: {}
    }
  },
  methods: {
    submit(ref) {
      this.$refs[ref].validate().then(res => {
        addTodolist(this.form).then(() => uni.navigateBack())
      }).catch(err => {
        console.log('err', err);
      })
    },
  }
}
</script>

<style scoped>

</style>
