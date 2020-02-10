import React, { Component } from 'react'
import styles from './styles/home.module.css'

export default class HomeComponent extends Component{
    render(){
        console.log(styles)
        return (
            <div>
                <div className={styles.banner}>
                    <div className={styles.bannerText}>
                        <h5>- Menos tiempo para la administración,</h5>
                        <h5>+ Más tiempo <h5 className={styles.bold}>para tu pasión.</h5></h5>
                        <h6>Si eres Creativo / Freelancer ¡Suira es para ti!</h6>
                    </div>
                </div>
                <div className={styles.dos}>
                    <h2>Queremos ver un mundo donde los Creativos y Freelancers vivan haciendo lo que los apasiona.</h2>
                </div>
                <div className={styles.profiles}>
                    <h3>Algunos de nuestros perfiles...</h3>
                </div>
            </div>
        )
    }
}