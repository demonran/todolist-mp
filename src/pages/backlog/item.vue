<template>
  <view>
    <view class="backlog-item">
      <switch ref="checkbox"
          type="checkbox"
          :checked="item.done"
          :disabled="disabled"
          @change="done"
          color="blue" style="transform:scale(0.7)"/>
      <view class="backlog-item-content">
        <text>{{ item.title }}</text>
        <text>{{ item.createdAt | formatDate }}</text>
      </view>

    </view>
  </view>

</template>

<script>
import {doneBacklog} from "@/api/backlog";

export default {
  name: "item",
  props: ['item'],
  data() {
    return {
      disabled: this.item.done
    }
  },
  methods: {
    done() {
      doneBacklog({id: this.item.id}).then(res => {
        this.disabled = true
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.backlog-item {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  line-height: 80rpx;
  justify-content: space-between;

  .backlog-item-content {
    display: flex;
    width: 660rpx;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: rgb(241 229 229) solid 2rpx;
  }
}
</style>