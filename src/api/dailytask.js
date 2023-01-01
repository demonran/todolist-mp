import request from "../utils/request.js";

export function dailyTasks() {
    return request.get('/api/todolist/daily-tasks')
}

export function doneDailyTask(data) {
    return request.post('/api/todolist/daily-tasks', data)
}

export default {
    dailyTasks
}
