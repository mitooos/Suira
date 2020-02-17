import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import styles from './links.module.css'

export default class Links extends Component {
    render() {
        return (
            <div>
                <SocialIcon className={styles.socialIcon} url={this.props.obj.url} network={this.props.obj.plataforma} style={{ height: 35, width: 35 }}/>
            </div>
        )

    }
}