import axios from 'axios';
import utils from '@/utils/util';
import {ElMessage} from 'element-plus';
import router from '../router'
// 创建axios实例
const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'https://sticker-api.gs-souvenir.com' : 'https://sticker-api.gs-souvenir.com',
    timeout: 100000
})

function queryString(data: any) {
    let ret = "";
    let it: string
    for (it in data) {
        if (data.hasOwnProperty(it)) {
            ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
    }
    return ret;
}


// request拦截器
service.interceptors.request.use(
    (config: any) => {
        if (config.method === 'post') {
            if (config.headers['Content-Type'] !== 'multipart/form-data') {
                config.data = queryString(config.data)
            }
        }
        let token = utils.getCookie('token');
        if (token) {
            config.headers['token'] = token;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (res: any) => {
        //code 后台响应代码 1代表正确 0代表错误 401代表未登录
        const code = res.data.ret;
        if (code === 401) {
            utils.removeCookie("token");
            router.replace({
                path: '/login',
            }).then()
            location.reload() // 为了重新实例化vue-router对象 避免bug
        } else if (code !== 1) {
            ElMessage.error(res.data.msg);
            return Promise.reject('error')
        } else {
            return res.data
        }
    },
    (error: any) => {
        console.log('err' + error)
        ElMessage.error(error);
        return Promise.reject(error)
    }
)

export default service
