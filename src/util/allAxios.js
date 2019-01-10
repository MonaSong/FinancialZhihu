import axios from 'axios';

let baseUrl2 =  'http://192.168.169.237:3000';
let baseUrl = 'http://127.0.0.1:3000';
let instance = axios.create({
    baseURL: baseUrl,
    header:{
        "content-type":"application/json"
    }
});

// 请求拦截器
instance.interceptors.request.use( config => {
    return Promise.resolve(config);
});

// 响应拦截器
instance.interceptors.response.use( res => {
    return Promise.resolve(res.data);
})

export const post = instance.post.bind(instance);
export const get = instance.get.bind(instance);
export const put = instance.put.bind(instance);
export const del = instance.delete.bind(instance);
