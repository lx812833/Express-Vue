import axios from 'axios';
import { Loading, Message } from 'element-ui';
import router from "../router";

// 超时处理
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

let loading;
const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: "拼命加载中......",
        background: "rgba(0, 0, 0, 0.7)"
    })
}

const endLoading = () => {
    loading.close()
}
// 请求拦截
service.interceptors.request.use(config => {
    // 加载动画
    startLoading();
    // 判断TOKEN
    if (localStorage.TOKEN) {
        // 设置统一请求header 这个相当于token
        config.headers.Authorization = localStorage.TOKEN
    }
    return config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
service.interceptors.response.use(response => {
    // 结束动画
    endLoading();
    return response;
}, error => {
    const { status } = error.response;
    if (error.response) {
        switch (status) {
            case 401:
                Message.error("长时间未登陆，请重新登录！");
                router.push("/login");
                break;
            case 404:
                router.push("*");
                break;
            case 500:
                Message.error("服务器异常！");
                break;
            default:
                // 统一错误提示
                Message.error(error.response.data);
                break;
        }
    }
    endLoading();
    localStorage.removeItem("TOKEN");
    return Promise.reject(error);
})

export default service;