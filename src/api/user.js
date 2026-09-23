import { request } from "./request";

export function signup(name, email, password) {
    return request('/user', {
        method: 'POST',
        body: JSON.stringify({name, email, password})
    })
}