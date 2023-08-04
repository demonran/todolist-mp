<template>
    <view>
      <uni-forms ref="valiForm">
        <uni-forms-item required>
          <uni-easyinput v-model="form.title" placeholder="输入你想坚持的事情" />
        </uni-forms-item>
        <uni-data-select
            :localdata="timePlan"
        ></uni-data-select>
        <uni-data-picker placeholder="请选择班级" popup-title="请选择所在地区" :localdata="timePlan"
                        >
        </uni-data-picker>

        <picker  :range="timePlan">
          <view class="uni-input">sdafasd</view>
        </picker>
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
      form: {},
      timePlan: [
        { text: '每天', value: 'EVERYDAY'},
        { text: '每周', value: 'WEEKLY'},
        { text: '每周x天', value: 'DAYS_IN_WEEK'}
      ].map(item => item.text)
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
