import request from "../utils/request.js";

export function dailyTasks() {
    return request.get('/api/user/daily-tasks')
}

export function doneDailyTask(data) {
    return request.post('/api/user/daily-tasks', data)
}

export default {
    dailyTasks
}
