const API_URL = import.meta.env.VITE_API_URL;
const API_VERSION = import.meta.env.VITE_API_VERSION;
const BASE_URL = `${API_URL}/api/${API_VERSION}`;

// To get the user token from the local storage
export function getToken() {
    return localStorage.getItem('token');
}

// To set user token to the local storage
export function setToken(token) {
    localStorage.setItem('token', token);
}

// To make a request templete for api requests
export async function request(endpoint, options = {}) {
    const token = getToken();

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...(token && {Authorization: `Barrer ${token}`}),
            ...options.headers,
        },
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Request failed');
    }

    return data;
}