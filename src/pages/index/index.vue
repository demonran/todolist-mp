<template>
	<view>
    <view class="title">
      <text>{{name}} 今日打卡 {{today}}</text>
    </view>

    <task v-for="item in todolist" :task="item" :key="item.id"  @click="taskDone(item)"></task>
<!--		<uni-list>-->
<!--      <uni-list-item v-for="item in todolist" :title="item.title"  note="列表禁用状态" clickable @click="taskDone(item)" :class="item.done ? 'done': ''">-->
<!--      </uni-list-item>-->
<!--    </uni-list>-->

   <button @click="share">分享</button>
	</view>
</template>

<script>
import { dailyTasks, doneDailyTask } from '../../api/dailytask.js'
import Task from '../../components/task.vue'
import {getUserInfo} from "../../api/auth.js";
import moment from "moment"
	export default {
    components: {Task},
		data() {
			return {
				name: getUserInfo().name,
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
        title: '每日打卡', //分享的名称
        path: '/pages/index/index',
      }
    },
		methods: {
      initData() {
        dailyTasks().then(res => {
          console.log(res)
          this.todolist = res
        })
      },
      getClass(item) {
        return item.done ? 'done': ''
      },
      taskDone(item) {
        doneDailyTask({todolist_id: item.id}).then(res =>this.initData())
      },
      share() {
        uni.share({
          provider: "weixin",
          scene: "WXSceneSession",
          type: 1,
          summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
          success: function (res) {
            console.log("success:" + JSON.stringify(res));
          },
          fail: function (err) {
            console.log("fail:" + JSON.stringify(err));
          }
        })
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
