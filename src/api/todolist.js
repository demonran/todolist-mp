import request from "../utils/request.js";

export function listTodolist() {
    return request.get('/api/todolist/todolist')
}

export function addTodolist(data) {
    return request({
        url: '/api/todolist/todolist',
        method: "post",
        data
    })
}

export function changeTodolistStatus(data) {
    return request({
        url: '/api/todolist/todolist/status',
        method: "put",
        data
    })
}
