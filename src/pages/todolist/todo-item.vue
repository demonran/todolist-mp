<template>

  <view>
    <view class="card">
      <view class="header">
        <view class="header-box">
          <view class="heander-avatar">sdfdsa</view>
          <view class="header-content">
            <view class="header-content-title">sdfas</view>
            <view class="header-content-subtitle">dsfa</view>
          </view>
        </view>
        <view class="extra">sdds</view>
      </view>

    </view>
    <uni-card title="基础卡片" sub-title="副标题" extra="额外信息" :thumbnail="avatar" @click="onClick">
      <text class="uni-body">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
    </uni-card>
  </view>

</template>

<script>
export default {
  name: "todolist",
  props: ['item'],
  data() {
    return {
      cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
      avatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
      extraIcon:{
        color: '#4cd964',
        size: '22',
        type: 'gear-filled'
      }
    }
  },
}
</script>

<style  scoped>
.card {
  margin: 30rpx;
  padding: 0 20rpx;
  box-shadow: 0rpx 0rpx 10rpx 5rpx rgba(0, 0, 0, 0.08);
}
.card .header {
  display: flex;
  border-bottom: 1px #EBEEF5 solid;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  overflow: hidden;
}
</style>
