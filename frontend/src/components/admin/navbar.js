import React, { Component } from 'react'
import { getRole } from '../../authentication/authorization'
import Nav from 'react-bootstrap/Nav'

export default class AdminNavbar extends Component {
    render() {
        if(getRole() === 'admin'){
            
            return (
                <div>
                    <Nav.Link href='/clientes'>Clientes</Nav.Link>
                </div>
            )
        }
        else{
            return <div></div>
        } 
    }
}
