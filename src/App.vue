<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    onShareAppMessage() {
      return {
        title: '打卡', //分享的名称
        path: '/pages/index/index',
        mpId:'wx4d922add64bcdc16' //此处配置微信小程序的AppId
      }
    }
	}
</script>

<style>
	/*每个页面公共css */
</style>
