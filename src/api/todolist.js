import request from "../utils/request.js";

export function listTodolist() {
    return request.get('/api/app/todolist')
}

export function addTodolist(data) {
    return request({
        url: '/api/app/todolist',
        method: "post",
        data
    })
}

export function changeTodolistStatus(data) {
    return request({
        url: '/api/app/todolist/status',
        method: "put",
        data
    })
}
