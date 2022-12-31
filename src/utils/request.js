import axios from "axios-miniprogram";

const service = axios.create({
    baseURL: 'https://nes.sit.yumimiao.cn',
})

service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json'
        return config
    }, error => Promise.reject(error)
)

export default service
