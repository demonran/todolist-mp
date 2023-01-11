import request from "../utils/request.js";

export function listBacklogs() {
    return request({
        url: '/api/todolist/backlogs',
        method: 'get'
    })
}

export function addBacklog(data) {
    return request({
        url: '/api/todolist/backlogs',
        method: "post",
        data
    })
}

export function doneBacklog(data) {
    return request({
        url: '/api/todolist/backlogs/done',
        method: 'post',
        data
    })
}
