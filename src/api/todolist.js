import request from "../utils/request.js";

export function listTodolist() {
    return request.get('/api/todolist/todolist')
}

