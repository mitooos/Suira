import React, { Component } from 'react'
import styles from './footer.module.css'
import { SocialIcon } from 'react-social-icons'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.contacto}>
                    <h4>Contacto</h4>
                    <a href="mailto:info@suira.co">info@suira.co</a>
                </div>
                <div className={styles.social}>
                    <SocialIcon className={styles.socialIcon} url="https://www.facebook.com/suira.co" bgColor="whitesmoke" style={{ height: 35, width: 35 }} />
                    <SocialIcon className={styles.socialIcon} url="https://www.instragram.com/suira.co" network="instagram" bgColor="whitesmoke" style={{ height: 35, width: 35 }} />
                    <SocialIcon className={styles.socialIcon} url="http://wa.me/573134981073" network="whatsapp" bgColor="whitesmoke" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        )
    }
}