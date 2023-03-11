import { getToken } from "./users-service"
const BASE_URL = "/api/users"

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
    // const res = await fetch(BASE_URL, {
    //     // I want to make a user
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(userData)
    // })

    // // we get a true here when the status is 200
    // if(res.ok) {
    //     return res.json()
    // } else {
    //     throw new Error('Invalid Sign Up')
    // }
}

export async function logIn(credentials) {
    return sendRequest(`${BASE_URL}/log-in`, 'POST', credentials)
    // const res = await fetch(`${BASE_URL}/log-in`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // })

    // if(res.ok) {
    //     return res.json()
    // } else {
    //     throw new Error('Invalid email or password')
    // }
}

export default async function sendRequest(url, method='GET', payload=null) {
    const options = { method }
    if(payload) {
        options.headers = { 'Content-Type': 'application/json'}
        options.body = JSON.stringify(payload)
    }
    const token = getToken()
    if(token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }
    const res = await fetch(url, options)
    if(res.ok) {
        return res.json()
    } else {
        throw new Error("Bad Request")
    }
}

export async function checkToken() {
    return sendRequest(BASE_URL + '/check-token')
}