<template>
  <web-view :src="url"></web-view>
</template>

<script>
import {getToken} from "@/api/auth.js";
import {getBaseURL} from "@/utils/request.js";
export default {
  name: "index",
  data() {
    return {
      url: getBaseURL() + '/#/h5/mobile-use?token='+ getToken()
    }
  },
}
</script>

<style scoped>

</style>
