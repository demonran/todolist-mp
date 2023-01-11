<template>
	<view>
    <view class="title">
      <uni-countdown class="uni-countdown1" :show-day="false" :font-size="30"  :hour="hour" :minute="minute" :second="second" color="#FFFFFF" background-color="#007AFF" />
    </view>

    <task v-for="item in todolist" :task="item" :key="item.id"  @click="taskDone(item)"></task>

	</view>
</template>

<script>
import { dailyTasks, doneDailyTask } from '../../api/dailytask.js'
import Task from '../../components/task.vue'
import {getUserInfo} from "../../api/auth.js";
import moment from "moment"
import {mapState} from 'vuex'
	export default {
    components: {Task},
		data() {
			return {
        todolist: [],
        hour: 23 - moment().hour(),
        minute: 59 - moment().minute(),
        second: 60 - moment().seconds()
			}
		},
		onLoad() {
      this.initData()
		},

    onPullDownRefresh() {
      this.initData().then(() => uni.stopPullDownRefresh())
    },
    onShareAppMessage() {
      return {
        title: '快来看看我的打卡吧', //分享的名称
        path: `/pages/share/index?userId=${getUserInfo().id}`,
      }
    },
    computed: {
      ...mapState({
        name: state => state.userInfo.name,
        openId: state => state.userInfo.wxOpenId
      }),
    },
		methods: {
      initData() {
        return dailyTasks().then(res => {
          this.todolist = res
          console.log(getUserInfo())
        })
      },
      getClass(item) {
        return item.done ? 'done': ''
      },
      taskDone(item) {
        doneDailyTask({todolist_id: item.id}).then(res =>this.initData())
      }
		}
	}
</script>

<style>
	.content {
		/*display: flex;*/
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}



	.text-area {
		display: flex;
		justify-content: center;
	}

  .uni-countdown1 {
    justify-content: center;
  }

	.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
