import axios from 'axios';
/*引入进度条*/
import nprogress from 'nprogress'
/*引入进度条样式*/
import 'nprogress/nprogress.css'
import {getToken, getUUID} from "@/utils";
import store from '@/store'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
});

requests.interceptors.request.use(
    (config) => {
        /*进度条开始*/
        nprogress.start();

        //config是配置对象
        config.headers.userTempId = getUUID();

        config.headers.token = getToken();

        return config;
    }
);

requests.interceptors.response.use(
    (res) => {
        /*进度条结束*/
        nprogress.done();

        return res.data;
    },
    (err) => {
        return Promise.reject(new Error('failed'));
    }
);

export default requests;
