import React, { Component } from 'react';
import styles from './tags.module.css'

export default class Tags extends Component {
    render() {
        return (

            <div className={styles.tag}>{this.props.obj.nombre}</div>
        )
    }
}