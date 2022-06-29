import axios from 'axios'
import { Toast } from 'vant'
import 'vant/es/toast/style'


const Axios = axios.create({
    baseURL: 'http://1.116.15.191:3000/',
    timeout: 5000
})

request.interceptors.request.use(config => { 
    return config
}, err => {
    return Promise.reject(error)
})

request.interceptors.response.use(config => {
    Toast.loading({
        message: '正在加载中',
        forbidClick: true,
        loadingType: 'spinner'
    })
    return res.data
}, error => {
    Toast.error('请求失败')
    return Promise.reject(error)
})

export default Axios