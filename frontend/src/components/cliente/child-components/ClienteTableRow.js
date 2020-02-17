import React, { Component } from 'react'
import styles from '../styles/cliente.module.css'

export default class ClienteTableRow extends Component {
  render () {
    return (
      <tr className={styles.anchor}>
        <td><a href={'/clientes/' + this.props.obj.id + '/'} style={{color:"blue !important"}}>{this.props.obj.nombre}</a></td>
        <td><a href={'/clientes/' + this.props.obj.id + '/'}>{this.props.obj.email}</a></td>
        <td><a href={'/clientes/' + this.props.obj.id + '/'}>{this.props.obj.proxima_fecha}</a></td>
      </tr>
    )
  }
}
