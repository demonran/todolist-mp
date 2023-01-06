<template>

  <view>
    <view class="card">
      <view class="header">
        <view class="header-box">
          <view class="header-avatar">
            <image class="header-avatar-iamge" :src="avatar"></image>
          </view>
          <view class="header-content">
            <text class="header-content-title">刷牙5分钟</text>
            <text class="header-content-subtitle">副标题</text>
          </view>
          <view class="header-extra">
            <text class="header-extra-text">20</text>
            <text class="header-extra-unit">Days</text>
          </view>
        </view>

      </view>
      <view class="body">
        <view class="body-main">
          <view class="body-main-item">
            <text class="body-main-item-title">本月完成天数</text>
            <view class="body-main-item-content">
              <text class="body-main-item-data">12</text>
              <text class="body-main-item-unit">Days</text>
            </view>
          </view>
          <view class="body-main-item">
            <text class="body-main-item-title">连续天数</text>
            <view class="body-main-item-content">
              <text class="body-main-item-data">9</text>
              <text class="body-main-item-unit">Days</text>
            </view>
          </view>
          <view class="body-main-item">
            <text class="body-main-item-title">坚持目标</text>
            <text class="body-main-item-data">永远</text>
          </view>
        </view>
        <view class="body-action">
          <view>
            <text>项目进行中</text>
            <text>1000-10-10</text>
          </view>
          <view>开关</view>
        </view>
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

<style lang="scss" scoped>
.card {
  margin: 30rpx;
  box-shadow: 0 0 10rpx 5rpx rgba(0, 0, 0, 0.08);
  border-radius: 10rpx;

  .header {
    display: flex;
    border-bottom: 1px #EBEEF5 solid;
    flex-direction: row;
    align-items: center;
    padding: 20rpx;
    overflow: hidden;
    background-color: #4751b0;

    .header-box {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      overflow: hidden;

      .header-avatar {
        width: 80rpx;
        height: 80rpx;
        overflow: hidden;
        border-radius: 10rpx;
        margin-right: 20rpx;

        .header-avatar-iamge {
          flex: 1;
          width: 40px;
          height: 40px;
        }
      }

      .header-content {
        margin-left: 20rpx;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        color: #eeeeee;

        .header-content-title {
          font-size: 35rpx;
        }
        .header-content-subtitle {
          font-size: 20rpx;
        }
      }

      .header-extra {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        color: #eeeeee;

        .header-extra-text {
          font-size: 50rpx;
        }
        .header-extra-unit {
          font-size: 20rpx;
        }
      }
    }

  }
  .body {
    padding: 20rpx;
    .body-main {
      display: flex;
      flex-direction: row;
      flex: 3;
      .body-main-item {
        display: flex;
        flex: 1;
        flex-direction: column;

        .body-main-item-title {
          color: #949494;
          font-size: 25rpx;
        }
        .body-main-item-content {


          .body-main-item-data {
            font-size: 40rpx;
            font-weight: bold;
            color: #767676;
          }
          .body-main-item-unit {
            border-radius: 15rpx;
            background-color: #e3e5e1;
            margin-left: 10rpx;
            font-size: 20rpx;
            color: #ffffff;
            padding: 2rpx 10rpx;
          }
        }

      }
    }
  }

}

</style>
