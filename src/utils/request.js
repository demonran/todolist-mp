import axios from "axios-miniprogram";
import {refreshToken, getToken, login, setToken, setUserInfo} from "../api/auth.js";

let isRefreshToken = false
let requests = []

const service = axios.create({
    baseURL: getBaseURL(),
})

export function getBaseURL() {
    let baseUrl;
    let envVersion = wx.getAccountInfoSync().miniProgram.envVersion;
    switch (envVersion) {
        case "develop": // 开发版
            // baseUrl = "http://localhost:8080"; //测试环境
            baseUrl = "https://nes.sit.yumimiao.cn"; //测试环境
            break;
        case "trial": // 体验版
            baseUrl = "https://nes.sit.yumimiao.cn"; //测试环境
            break;
        case "release": // 正式版
            baseUrl = "https://nes.uat.yumimiao.cn"; //正式环境
    }
    return baseUrl
}

service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json'
        config.headers['Authorization'] = 'Bearer ' + getToken()
        uni.showLoading({
            title: '加载中'
        })
        return config
    }, error => Promise.reject(error)
)

service.interceptors.response.use(
    response => {
        uni.hideLoading()
        console.log('response', response.data)
        return response.data
    }, error => {
        uni.hideLoading()
        const code = error.response.data.status
        if (code === 401) {
            const config = error.config;
            if (!isRefreshToken) {
                isRefreshToken = true
                return refreshToken().then(() => {
                    requests.forEach(cb => cb())
                    return service(config)
                }).catch(err => Promise.reject(err))
                    .finally(() => isRefreshToken = false)
            } else {
                return new Promise(resolve => {
                    requests.push(() => resolve(service(config)))
                })
            }
        }
        uni.showToast({
            title: '服务异常，请下拉刷新',
            icon: 'none',
            duration: 2000
        });
        console.log('接口请求失败', error)
        return Promise.reject(error)


    })

export default service
