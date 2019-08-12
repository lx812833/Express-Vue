import request from "@/utils/request"

export const register = (data) => {
    return request({
        url: "/api/users/register",
        data,
        method: "POST"
    })
}

export const login = (data) => {
    return request({
        url: "/api/users/login",
        data,
        method: "POST"
    })
}