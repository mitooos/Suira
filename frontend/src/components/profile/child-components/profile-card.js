import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import Tag from '../../shared-components/tags'
import styles from '../styles/profile.module.css'

export default class ProfileCard extends Component{

    renderTags(){
        return this.props.obj.tags.map((res,i) => {
            return <Tag obj={res} key={i}/>
        })
    }

    render(){
        return (
            <Link to={"/profiles/" + this.props.obj.id}>
                <Card className={styles.card}>
                    <Card.Img variant="top" src={this.props.obj.ruta_imagen} />
                    <Card.Title>{this.props.obj.nombre}</Card.Title>
                    <div className={styles.tagsWrapper}>{this.renderTags()}</div>
                    <Card.Text>{this.props.obj.descripcion}</Card.Text>
                </Card>
            </Link>
        )
    }
}