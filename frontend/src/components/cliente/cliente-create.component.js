import React, { Component } from 'react'
import {interceptorAxios} from '../../authentication/inteceptor'
import ClienteForm from './child-components/clienteForm'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default class ClienteCreate extends Component {
  constructor(props) {
    super(props)

    this.createCliente = this.createCliente.bind(this)
  }

  createCliente(cliente) {
    interceptorAxios.post(process.env.REACT_APP_API_URL + 'clientes/', cliente)
      .then(res => {
        console.log(res.data)
        this.props.history.push('/clientes')
      })
      .catch(error => {
        console.log(error)
      })
  }

  form() {
    const clienteObject = {
      nombre: '',
      usuario: {
        username: '',
        password: ''
      },
      email: '',
      perfil: {
        telefono: '',
        empresa: '',
        descripcion: '',
        trayectoria: '',
        ubicacion: '',
        tags: [
          {
            nombre: ''
          }
        ],
        links: [
          {
            plataforma: '',
            url: ''
          }
        ]
      },
      proxima_fecha: '',
      comentarios: '',
      n_trabajos: 0
    }
    return <ClienteForm onSubmit={this.createCliente} btn='Crear' cliente={clienteObject} />
  }

  render() {
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
