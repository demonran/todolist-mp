import request from "../utils/request.js";

export function listBacklogs() {
    return request({
        url: '/api/app/backlogs',
        method: 'get'
    })
}

export function addBacklog(data) {
    return request({
        url: '/api/app/backlogs',
        method: "post",
        data
    })
}

export function doneBacklog(data) {
    return request({
        url: '/api/app/backlogs/done',
        method: 'post',
        data
    })
}
