import request from "@/utils/request"

export const getProfiles = () => {
    return request({
        url: "/api/profiles",
        method: "GET"
    })
}

export const deleteProfile = (id) => {
    return request({
        url: `/api/profiles/delete/${id}`,
        method: "DELETE"
    })
}

export const addProfile = (data) => {
    return request({
        url: "/api/profiles/add",
        data,
        method: "POST"
    })
}

export const editProfile = (id, data) => {
    return request({
        url: `/api/profiles/edit/${id}`,
        data,
        method: "POST"
    })
}