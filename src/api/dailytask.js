import request from "../utils/request.js";

export function dailyTasks() {
    return request.get('/api/app/daily-tasks')
}

export function dailyTasksByUserId(params) {
    return request({
        url: '/api/app/app-daily-tasks',
        method: 'get',
        params
    })
}

export function doneDailyTask(data) {
    return request.post('/api/app/daily-tasks', data)
}

export default {
    dailyTasks
}
