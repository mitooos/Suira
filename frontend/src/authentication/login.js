import axios from 'axios'
import Cookies from 'js-cookie'

export const login = (username, password) => {
    axios.post(process.env.REACT_APP_API_URL + 'api/token/',
        {
            username: username,
            password: password
        })
        .then(res => {
            let token = res.data.access
            let refresh = res.data.refresh
            let role = res.data.role
            Cookies.set('token', token, {expires: 1})
            Cookies.set('refresh', refresh, {expires: 1})
            Cookies.set('role', role, {expires: 4})
        })
        .catch(err => {
            console.log(err)
        })
}