import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {login} from '../../authentication/login'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.login = this.login.bind(this)

        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    async login(){
        await login(this.state.username, this.state.password)
        this.props.history.push('/')
        window.location.reload()
    }


    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={this.state.username} onChange={this.onChangeUsername} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.onChangePassword} />
                    </Form.Group>
                </Form>
                <Button onClick={this.login}>Ingresar</Button>
            </div>

        )
    }
}