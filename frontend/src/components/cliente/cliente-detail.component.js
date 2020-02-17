import React, { Component } from 'react';
import {interceptorAxios} from '../../authentication/inteceptor'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Tag from '../shared-components/tags/tags'
import Links from '../shared-components/links/links'

export default class ClienteDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cliente: '',
            show: false,
            tags:[],
            links:[]
        };
    }

    componentDidMount() {
        interceptorAxios.get(process.env.REACT_APP_API_URL + 'clientes/' + this.props.match.params.id + '/')
            .then(res => {
                this.setState({
                    id: res.data.id,
                    nombre: res.data.nombre,
                    email: res.data.email,
                    telefono: res.data.perfil.telefono,
                    empresa: res.data.perfil.empresa,
                    proximaFecha: res.data.proxima_fecha,
                    descripcion: res.data.perfil.descripcion,
                    comentarios: res.data.comentarios,
                    trayectoria: res.data.perfil.trayectoria,
                    ubicacion: res.data.perfil.ubicacion,
                    tags: res.data.perfil.tags,
                    links: res.data.perfil.links
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
        interceptorAxios.delete(process.env.REACT_APP_API_URL + 'clientes/' + this.props.match.params.id + '/')
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

    renderTags() {
        return this.state.tags.map((res, i) => {
            return <Tag obj={res} key={i} />
        })
    }

    renderLinks(){
        return this.state.links.map((res,i) => {
            return <Links obj={res} key={i} />
        })
    }


    render() {
        return (
            <div>
                <ul>
                    <li>Nombre: {this.state.nombre}</li>
                    <div >{this.renderTags()}</div>
                    <li>Email: {this.state.email}</li>
                    <li>Telefono: {this.state.telefono} </li>
                    <li>Empresa: {this.state.empresa} </li>
                    <li>Ubicación: {this.state.ubicacion}</li>
                    <li>Proxima Fecha: {this.state.proximaFecha}</li>
                    <li>Descripción: {this.state.descripcion}</li>
                    <li>Comentarios: {this.state.comentarios}</li>
                    <li>Trayectoria: {this.state.trayectoria}</li>
                    <div>{this.renderLinks()}</div>
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