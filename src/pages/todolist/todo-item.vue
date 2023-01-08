<template>
  <view class="card">
    <view class="header">
      <view class="header-box">
        <!--          <view class="header-avatar">-->
        <!--            <image class="header-avatar-image" :src="avatar"></image>-->
        <!--          </view>-->
        <view class="header-content">
          <text class="header-content-title">{{ item.title }}</text>
          <text class="header-content-subtitle">副标题</text>
        </view>
        <view class="header-extra">
          <text class="header-extra-text">{{ item.totalDays }}</text>
          <text class="header-extra-unit">Days</text>
        </view>
      </view>

    </view>
    <view class="body">
      <view class="body-main">
        <view class="body-main-item">
          <text class="body-main-item-title">本月完成天数</text>
          <view class="body-main-item-content">
            <text class="body-main-item-data">{{ item.finishedDaysInThisMonth }}</text>
            <text class="body-main-item-unit">Days</text>
          </view>
        </view>
        <view class="body-main-item">
          <text class="body-main-item-title">连续天数</text>
          <view class="body-main-item-content">
            <text class="body-main-item-data">{{ item.continuousFinishDays }}</text>
            <text class="body-main-item-unit">Days</text>
          </view>
        </view>
        <view class="body-main-item">
          <text class="body-main-item-title">坚持目标</text>
          <view class="body-main-item-content">
            <text class="body-main-item-data">永远</text>
          </view>
        </view>
      </view>
      <view class="body-action">
        <view class="body-action-status">
          <text class="status">{{statusDesc}}</text>
          <text class="date">Since {{ item.createdAt }}</text>
        </view>
        <switch
            @change="changeStatus"
            :checked="checked"
            style="transform:scale(0.7)"/>
      </view>
    </view>


  </view>

</template>

<script>

export default {
  name: "todolist",
  props: ['item'],
  data() {
    return {
      checked: this.item.status === 1
    }
  },
  computed: {
    statusDesc() {
      return this.checked ? '任务进行中' : '任务暂停'
    },
  },
  methods: {
    changeStatus(e) {
      this.checked = e.detail.value
      this.$emit("change", this.item.id, this.checked ? 1: 0)
    },

  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 15rpx 30rpx;
  box-shadow: 0 0 10rpx 5rpx rgba(0, 0, 0, 0.08);
  border-radius: 10rpx;

  .header {
    border-radius: 10rpx;
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

        .header-avatar-image {
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
        color: #ffffff;

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
        color: #ffffff;

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
      justify-content: space-between;

      .body-main-item {
        display: flex;
        flex-direction: column;

        .body-main-item-content {
          .body-main-item-data {
            vertical-align: middle;
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

        .body-main-item-title {
          color: #949494;
          font-size: 25rpx;
        }

      }
    }

    .body-action {
      margin-top: 10rpx;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .body-action-status {
        display: flex;
        flex-direction: column;

        .status {
          font-size: 25rpx;
        }

        .date {
          font-size: 20rpx;
          color: #d8d8d8;
        }
      }
    }
  }

}

</style>
