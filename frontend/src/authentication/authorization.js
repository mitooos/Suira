import Cookies from 'js-cookie'

export const isLoggedIn = () => {
    return Cookies.get('role')?true:false
}

export const getRole = () => {
    return Cookies.get('role')
}