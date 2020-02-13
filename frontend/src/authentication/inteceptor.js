import axios from 'axios'
import Cookies from 'js-cookie'
import { getRefreshToken } from './refreshToken'

export const interceptorAxios = axios.create({})

interceptorAxios.interceptors.request.use(
    request => {
        const token = Cookies.get('token')
        if (token) {
            request.headers['Bearer'] = token
        }
        return request
    },
    error => {
        Promise.reject(error)
    }
)

interceptorAxios.interceptors.response.use(response => {
    return response
},
    async error => {
        const originalRequest = error.config
        console.log(error.response.status)
        if(error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true
             await getRefreshToken()
             const token = Cookies.get('token')
             if (token) {
                 originalRequest.headers['Bearer'] = token
             }
             console.log('refresh')
             return axios(originalRequest)
        }
    }
)