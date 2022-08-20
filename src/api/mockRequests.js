import axios from 'axios';
/*引入进度条*/
import nprogress from 'nprogress'
/*引入进度条样式*/
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000
});

requests.interceptors.request.use(
    (config) => {
        /*进度条开始*/
        nprogress.start();

        //config是配置对象
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
