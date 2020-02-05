import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class ProfileCard extends Component{
    render(){
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.obj.ruta_imagen} />
                <Card.Title>{this.props.obj.nombre}</Card.Title>
                <Card.Text>{this.props.obj.descripcion}</Card.Text>
            </Card>
        )
    }
}