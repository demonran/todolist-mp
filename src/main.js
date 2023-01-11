import Vue from 'vue'
import App from './App'
import store from './store'
import moment from 'moment'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.filter('formatDate', (val, format)=> {
  format = format || 'YYYY-MM-DD'
  return moment(val).format(format)
})

const app = new Vue({
  store,
  ...App,
})
app.$mount()
