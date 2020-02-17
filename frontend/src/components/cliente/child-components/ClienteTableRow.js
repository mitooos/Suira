import React, { Component } from 'react'

export default class ClienteTableRow extends Component {
  render () {
    return (
      <tr>
        <td><a href={'/clientes/' + this.props.obj.id + '/'}>{this.props.obj.nombre}</a></td>
        <td><a href={'/clientes/' + this.props.obj.id + '/'}>{this.props.obj.email}</a></td>
        <td><a href={'/clientes/' + this.props.obj.id + '/'}>{this.props.obj.proxima_fecha}</a></td>
      </tr>
    )
  }
}
