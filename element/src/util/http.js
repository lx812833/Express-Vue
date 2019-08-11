import axios from 'axios';
import { Loading, Message } from 'element-ui';
import router from "../router";

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
axios.interceptors.request.use(config => {
    // 加载动画
    startLoading();
    // 判断TOKEN
    if (localStorage.TOKEN) {
        // 设置统一请求header
        config.headers.Authorization = localStorage.TOKEN
    }
    return config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
axios.interceptors.response.use(response => {
    // 结束动画
    endLoading();
    return response;
}, error => {
    endLoading();
    // 统一错误提示
    Message.error(error.response.data);
    const { status } = error.response;
    if (status === 401) {
        Message.error("长时间未登陆，请重新登录！");
        localStorage.removeItem("TOKEN");
        // 跳转到登录页面
        router.push("/login");
    }
    return Promise.reject(error);
})

export default axios;