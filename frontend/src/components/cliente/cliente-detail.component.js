import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default class ClienteDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cliente: '',
            show: false
        };
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + 'clientes/' + this.props.match.params.id + '/')
            .then(res => {
                this.setState({
                    id: res.data.id,
                    nombre: res.data.nombre,
                    email: res.data.email,
                    telefono: res.data.perfil.telefono,
                    empresa: res.data.perfil.empresa,
                    proximaFecha: res.data.proxima_fecha,
                    descripcion: res.data.perfil.descripcion,
                    comentarios: res.data.comentarios
                });
            })
            .catch(error => {
                console.log(error)
            });
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleOpen = () => {
        this.setState({
            show: true
        })
    }

    deleteCliente = () => {
        axios.delete(process.env.REACT_APP_API_URL + 'clientes/' + this.props.match.params.id + '/')
            .then(
                res => {
                    console.log(res);
                    this.props.history.push('/clientes/')
                }
            )
            .catch( error => {
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <ul>
                    <li>Nombre: {this.state.nombre}</li>
                    <li>Email: {this.state.email}</li>
                    <li>Telefono: {this.state.telefono} </li>
                    <li>Empresa: {this.state.empresa} </li>
                    <li>Proxima Fecha: {this.state.proximaFecha}</li>
                    <li>Descripción: {this.state.descripcion}</li>
                    <li>Comentarios: {this.state.comentarios}</li>
                </ul>
                <Link to={"/clientes/" + this.state.id + '/update/'}>
                    <Button variant="primary">Actualizar</Button>
                </Link>
                <Button variant="danger" onClick={this.handleOpen}>Eliminar Cliente</Button>
                <Modal show={this.state.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Esta seguro que desea aliminar al cliente: {this.state.nombre}?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Cancelar</Button>
                        <Button variant="danger" onClick={this.deleteCliente}>Eliminar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}