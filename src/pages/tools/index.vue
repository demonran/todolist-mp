<template>
  <uni-section title="常用工具" type="line" padding>
    <uni-grid :column="2" :showBorder="false" :highlight="true">
      <uni-grid-item v-for="(item, index) in data" :index="index" :key="index" @click.native="goto(item.page)">
        <view class="grid-item-box" style="background-color: #fff;">
          <uni-icons :type="item.icon" :size="30" color="#777" />
          <text class="text">{{ item.title }}</text>
        </view>
      </uni-grid-item>
    </uni-grid>
  </uni-section>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      data: [
        {title: '使用手机', icon: 'wallet', page: '/pages/tools/mobile-use/index'},
        {title: '待办', icon: 'calendar-filled', page: '/pages/backlog/index'},
      ]
    }
  },
  methods: {
    goto(page) {
      uni.navigateTo({url: page})
    },
  }
}
</script>

<style scoped>

</style>
