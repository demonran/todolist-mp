<template>
	<view>
    <view class="title">
      <text>{{name}} 今日打卡 {{today}}</text>
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
        today: moment().format("YYYY-MM-DD")
			}
		},
		onLoad() {

		},
    onShow() {
      this.initData()
    },
    onShareAppMessage() {
      return {
        title: '快来看看我的打卡吧', //分享的名称
        path: `/pages/share/index?openId=${getUserInfo().wxOpenId}`,
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
        dailyTasks().then(res => {
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

	.title {
    text-align: center;
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
