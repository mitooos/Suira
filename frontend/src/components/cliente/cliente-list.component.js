import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import ClienteTableRow from './child-components/ClienteTableRow'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default class ClienteList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clientes: []
    }
  }

  componentDidMount () {
    axios.get(process.env.REACT_APP_API_URL + 'clientes/')
      .then(res => {
        this.setState({
          clientes: res.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  DataTable () {
    return this.state.clientes.map((res, i) => {
      return <ClienteTableRow obj={res} key={i} />
    })
  }

  render () {
    return (
      <div className='table-wrapper'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Proxima Fecha</th>
            </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
        <Link to='/clientes/create'>
          <Button variant='primary' size='lg' block='block'>Agregar</Button>
        </Link>
      </div>
    )
  }
}
