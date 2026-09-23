import { request } from "./request";

// To request to the login api
export function login(email, password) {
    return request('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
}