import axios from 'axios'
import Cookies from 'js-cookie'

export const getRefreshToken = () => {
    axios.post(process.env.REACT_APP_API_URL + 'api/token/refresh/',
        {
            refresh: Cookies.get('refresh')
        })
        .then(res => {
            let token = res.data.access
            Cookies.set('token', token, {expires: 1})
        })
        .catch(err => {
            console.log(err)
        })
}