import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default class ClienteForm extends Component {
  constructor (props) {
    super(props)
    this.onChangeNombre = this.onChangeNombre.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeTelefono = this.onChangeTelefono.bind(this)
    this.onChangeEmpresa = this.onChangeEmpresa.bind(this)
    this.onChangeProximaFecha = this.onChangeProximaFecha.bind(this)
    this.onChangeDescripcion = this.onChangeDescripcion.bind(this)
    this.onChangeComentarios = this.onChangeComentarios.bind(this)
    this.onChangeNTrabajos = this.onChangeNTrabajos.bind(this)
    this.sumbmit = this.sumbmit.bind(this)
    this.state = {
      nombre: props.cliente.nombre,
      username: props.cliente.usuario.username,
      password: props.cliente.usuario.password,
      email: props.cliente.email,
      telefono: props.cliente.perfil.telefono,
      empresa: props.cliente.perfil.empresa,
      proximaFecha: props.cliente.proxima_fecha ? Date.parse(props.cliente.proxima_fecha) : new Date(),
      descripcion: props.cliente.perfil.descripcion,
      comentarios: props.cliente.comentarios,
      nTrabajos: props.cliente.n_trabajos
    }
  }

  static getDerivedStateFromProps (props, state) {
    if (state.nombre === '' && state.username === '') {
      return {
        nombre: props.cliente.nombre,
        username: props.cliente.usuario.username,
        password: props.cliente.usuario.password,
        email: props.cliente.email,
        telefono: props.cliente.perfil.telefono,
        empresa: props.cliente.perfil.empresa,
        proximaFecha: props.cliente.proxima_fecha ? new Date(props.cliente.proxima_fecha) : new Date(),
        descripcion: props.cliente.perfil.descripcion,
        comentarios: props.cliente.comentarios,
        nTrabajos: props.cliente.n_trabajos
      }
    } else return null
  }

  onChangeNombre (e) {
    this.setState({ nombre: e.target.value })
  }

  onChangeUsername (e) {
    this.setState({ username: e.target.value })
  }

  onChangePassword (e) {
    this.setState({ password: e.target.value })
  }

  onChangeEmail (e) {
    this.setState({ email: e.target.value })
  }

  onChangeTelefono (e) {
    this.setState({ telefono: e.target.value })
  }

  onChangeEmpresa (e) {
    this.setState({ empresa: e.target.value })
  }

  onChangeProximaFecha (e) {
    this.setState({ proximaFecha: e })
  }

  onChangeDescripcion (e) {
    this.setState({ descripcion: e.target.value })
  }

  onChangeComentarios (e) {
    this.setState({ comentarios: e.target.value })
  }

  onChangeNTrabajos (e) {
    this.setState({ nTrabajos: e.target.value })
  }

  sumbmit (e) {
    e.preventDefault()
    console.log(this.state.proximaFecha.toISOString())
    const cliente = {
      nombre: this.state.nombre,
      usuario: {
        username: this.state.username,
        password: this.state.password
      },
      email: this.state.email,
      perfil: {
        telefono: this.state.telefono,
        empresa: this.state.empresa,
        descripcion: this.state.descripcion,
        ruta_imagen: 'image'
      },
      proxima_fecha: this.state.proximaFecha.getFullYear() + '-' + (this.state.proximaFecha.getMonth() + 1) + '-' + this.state.proximaFecha.getDate(),
      comentarios: this.state.comentarios,
      n_trabajos: this.state.nTrabajos
    }
    this.props.onSubmit(cliente)
  }

  render () {
    return (
      <div className='form-wrapper'>
        <Form onSubmit={this.sumbmit}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' value={this.state.nombre} onChange={this.onChangeNombre} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' value={this.state.username} onChange={this.onChangeUsername} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' value={this.state.password} onChange={this.onChangePassword} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' value={this.state.email} onChange={this.onChangeEmail} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control type='phone' value={this.state.telefono} onChange={this.onChangeTelefono} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Empresa</Form.Label>
            <Form.Control type='text' value={this.state.empresa} onChange={this.onChangeEmpresa} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control type='text' value={this.state.descripcion} onChange={this.onChangeDescripcion} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Próxima Fecha</Form.Label><br />
            <DatePicker className='form-control' selected={this.state.proximaFecha} onChange={this.onChangeProximaFecha} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Comentarios</Form.Label>
            <Form.Control type='text' value={this.state.comentarios} onChange={this.onChangeComentarios} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Numero de Trabajos</Form.Label>
            <Form.Control type='number' value={this.state.nTrabajos} onChange={this.onChangeNTrabajos} />
          </Form.Group>

          <Button variant='primary' size='lg' block='block' type='submit'>
            {this.props.btn}
          </Button>
        </Form>
      </div>
    )
  }
}
