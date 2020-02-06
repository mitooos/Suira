import React, { Component } from 'react';
import styles from '../styles/tags.module.css'

export default class Tags extends Component {
    render() {
        console.log(styles.tag)
        return (

            <div className={styles.tag}>{this.props.obj.nombre}</div>
        )
    }
}