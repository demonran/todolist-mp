import request from "../utils/request.js";

const TokenKey = 'TOKEN'
const UserInfo = "USER_INFO"

export function login(code) {
    return request({
        url : "/api/sys/auth/weixin",
        method: 'post',
        data: {code}
    })
}

export function refreshToken() {
    return new Promise((resolve, reject) => {
        uni.login({
            provider: 'weixin', //使用微信登录
            success: function (res) {
                login(res.code).then(res => {
                    setToken(res.token)
                    setUserInfo(res.user)
                    resolve(res)
                })
            }
        })
    })

}

export function setToken(token) {
    uni.setStorageSync(TokenKey, token)
}

export function getToken() {
    return uni.getStorageSync(TokenKey)
}

export function setUserInfo(user) {
    uni.setStorageSync(UserInfo, user)
}

export function getUserInfo() {
    return uni.getStorageSync(UserInfo)
}
