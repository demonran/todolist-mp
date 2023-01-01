<template>

</template>

<script>
import {login, setToken, setUserInfo} from "../../api/auth.js";

export default {
  name: "login",
  onLoad(option) {
    uni.login({
      provider: 'weixin', //使用微信登录
      success: function (res) {
        console.log(res.code);
        login(res.code).then(res => {
          setToken(res.token)
          setUserInfo(res.user)
          uni.navigateBack({delta: 1});
        })
      }
    });
  }
}
</script>

<style scoped>

</style>
