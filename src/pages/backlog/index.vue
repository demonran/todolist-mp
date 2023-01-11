<template>
  <view class="backlog">
    <view class="backlog-header">
      <input class="backlog-header-input"
             placeholder="+ 添加任务, 回车即可保存"
             confirm-type="done"
             @confirm="submit"
      />
    </view>
    <Item v-for="item in data" :key="item.id" :item="item"></Item>
  </view>

</template>

<script>
import Item from './item'
import {addBacklog, listBacklogs} from "@/api/backlog";

export default {
  name: "index",
  components: {Item},
  data() {
    return {
      data: []
    }
  },
  onLoad() {
    this.initData()
  },
  methods: {
    initData() {
      listBacklogs().then(data => this.data = data)
    },
    submit(e) {
      const title = e.detail.value
      addBacklog({title: title}).then(() => this.initData())
    },
  }
}
</script>

<style lang="scss" scoped>
.backlog {
  margin: 10rpx 40rpx;
  .backlog-header {
    //border: rgb(71,114,250) solid 1rpx;
    border-radius: 12rpx;
    line-height: 100rpx;
    background-color: rgba(25,25,25, 0.05);
    margin-bottom: 30rpx;

    .backlog-header-input {
      padding: 0 30rpx;
      height: 80rpx;
      font-size: 30rpx;
    }
    .backlog-header:hover {
      border: rgb(71,114,250) solid 1rpx;
    }
  }
}

</style>