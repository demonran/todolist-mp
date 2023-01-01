import axios from "axios-miniprogram";
import {getToken, login, setToken, setUserInfo} from "../api/auth.js";

const service = axios.create({
    baseURL: getBaseURL() ,
})

function getBaseURL() {
    let baseUrl;
    let envVersion = wx.getAccountInfoSync().miniProgram.envVersion;
    switch (envVersion) {
        case "develop": // 开发版
            baseUrl = "http://localhost:8080"; //测试环境
            break;
        case "trial": // 体验版
            baseUrl = "https://nes.sit.yumimiao.cn"; //测试环境
            break;
        case "release": // 正式版
            baseUrl = "https://nes.sit.yumimiao.cn"; //正式环境
    }
    return baseUrl
}

service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json'
        config.headers['Authorization'] = 'Bearer ' + getToken()
        return config
    }, error => Promise.reject(error)
)

service.interceptors.response.use(
    response => {
        return response.data
        console.log('response,',response)
    },error => {
        const code = error.response.data.status
        if (code) {
            if (code === 401) {
                debugger
                uni.navigateTo({url: '/pages/login/index'})
            }
        } else {
            console.log('接口请求失败')
        }

    })

export default service
