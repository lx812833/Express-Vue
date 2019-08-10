import axios from "@/util/http"

export const register = (data) => {
    axios.request({
        url: "/api/users/register",
        params: data,
        method: "POST"
    })
}