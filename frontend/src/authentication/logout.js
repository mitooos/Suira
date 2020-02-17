import Cookies from 'js-cookie'

export const logOut = () =>{
    console.log('logout')
    Cookies.remove('token')
    Cookies.remove('refresh')
    Cookies.remove('role')
}