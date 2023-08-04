import request from "@/utils/request.js";
export default {
    usingMobile() {
        return request({
            url: '/api/app/mobile/using',
            method: 'get'
        })
    },

    useMobile() {
        return request({
            url: '/api/app/mobile/use',
            method: "post"
        })
    },

    returnMobile(data) {
        return request({
            url: '/api/app/mobile/return',
            method: "post",
            data
        })
    },

    usedList() {
        return request({
            url: '/api/app/mobile/used-list',
            method: "get"
        })
    }
}
