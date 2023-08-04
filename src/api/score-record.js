import request from "../utils/request.js";

export function listScoreRecord() {
    return request({
        url: '/api/app/scores',
        method: 'get'
    })
}
