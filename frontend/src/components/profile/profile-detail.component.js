import React, { Component } from 'react'
import axios from 'axios'
import Image from 'react-bootstrap/Image'
import Tag from './child-components/tags'
import styles from './styles/profile.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class ProfileDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cliente: '',
            tags: []
        }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + 'profiles/' + this.props.match.params.id + '/')
            .then(res => {
                this.setState({
                    nombre: res.data.cliente[0].nombre,
                    email: res.data.cliente[0].email,
                    tags: res.data.tags,
                    empresa: res.data.empresa,
                    ruta_imagen: res.data.ruta_imagen,
                    descripcion: res.data.descripcion,
                    trayectoria: res.data.trayectoria,
                    telefono: res.data.telefono
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    renderTags() {
        return this.state.tags.map((res, i) => {
            return <Tag obj={res} key={i} />
        })
    }

    render() {
        return (
            <Row>
                <Col>
                    <Image src={this.state.ruta_imagen}></Image>
                    <div>
                        <h6>Trayectoría:</h6>
                        <p>{this.state.trayectoria}</p>
                    </div>
                </Col>
                <Col>
                    <h4>{this.state.nombre}</h4>
                    <div className={styles.tagsWrapper}>{this.renderTags()}</div>
                    <div>
                        <h6>Descripción:</h6>
                        <p>{this.state.descripcion}</p>
                    </div>
                    <h6>Email: {this.state.email}</h6>
                    <h6>Telefono: {this.state.telefono}</h6>
                </Col>
            </Row>
        )
    }

}