import React, { Component } from 'react'
import axios from 'axios'
import ClienteForm from './child-components/clienteForm'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default class ClienteUpdate extends Component {
  constructor (props) {
    super(props)
    this.updateCliente = this.updateCliente.bind(this)
    this.form = this.form.bind(this)
    this.state = {
      cliente: {
        nombre: '',
        usuario: {
          username: '',
          password: ''
        },
        email: '',
        perfil: {
          telefono: '',
          empresa: '',
          descripcion: ''
        },
        proxima_fecha: '',
        comentarios: '',
        n_trabajos: 0

      }
    }
  }

  componentDidMount () {
    axios.get(process.env.REACT_APP_API_URL + 'clientes/' + this.props.match.params.id + '/')
      .then(res => {
        this.setState({
          cliente: res.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  updateCliente (cliente) {
    console.log(JSON.stringify(cliente))
    axios.put(process.env.REACT_APP_API_URL + 'clientes/' + this.state.cliente.id + '/', cliente)
      .then(res => {
        console.log(res.data)
        this.props.history.push('/clientes/' + this.state.cliente.id + '/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  form () {
    return <ClienteForm onSubmit={this.updateCliente} btn='Actualizar' cliente={this.state.cliente} />
  }

  render () {
    return (
      <div>
        {this.form()}
        <Link to='/clientes/'>
          <Button variant='danger' size='lg' block='block'>Cancelar</Button>
        </Link>
      </div>
    )
  }
}
