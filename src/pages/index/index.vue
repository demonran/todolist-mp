<template>
	<view >
    <task v-for="item in todolist" :task="item"  @click="taskDone(item)"></task>
<!--		<uni-list>-->
<!--      <uni-list-item v-for="item in todolist" :title="item.title"  note="列表禁用状态" clickable @click="taskDone(item)" :class="item.done ? 'done': ''">-->
<!--      </uni-list-item>-->
<!--    </uni-list>-->
	</view>
</template>

<script>
import { dailyTasks, doneDailyTask } from '../../api/todolist.js'
import Task from '../../components/task.vue'
	export default {
    components: {Task},
		data() {
			return {
				title: 'Hello',
        todolist: []
			}
		},
		onLoad() {
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
        dailyTasks().then(res => this.todolist = res.data)
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
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
