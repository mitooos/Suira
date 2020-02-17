import React, { Component } from 'react'
import {logOut} from '../../authentication/logout'
import {isLoggedIn} from '../../authentication/authorization'
import Button from 'react-bootstrap/Button'

export default class LogOutButton extends Component{
    logOut = () => {
        logOut()
        window.location.reload()
    }

    render(){
        if(isLoggedIn()){
            return(
                <Button onClick={this.logOut}>Log Out</Button>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}