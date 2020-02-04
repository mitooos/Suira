import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default class ClienteDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cliente: ''
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
            .catch((error => {
                console.log(error)
            }));
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
            <Link to={"/clientes/" + this.state.id+ '/update/'}>
                <Button variant="primary" size="lg" block="block">Actualizar</Button>
            </Link>
           </div>
        );
    }
}