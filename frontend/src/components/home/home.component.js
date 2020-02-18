import React, { Component } from 'react'
import axios from 'axios'
import styles from './styles/home.module.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProfileCard from './child-components/profiles-card.component'

export default class HomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profiles: []
        }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + 'profiles/')
            .then(res => {
                this.setState({
                    profiles: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    dispalayProfiles() {
        console.log(this.state.profiles)
        return this.state.profiles.map((res, i) => {
            const profile = {
                id: res.id,
                nombre: res.cliente[0] ? res.cliente[0].nombre : 'undefined',
                ruta_imagen: res.ruta_imagen,
                tags: res.tags
            }
            return (
                <div key={i}>
                    <ProfileCard obj={profile} key={i} />
                </div>
            )
        })
    }

    render() {

        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            },
          };

        return (
            <div>
                <div className={styles.banner}>
                    <div className={styles.bannerText}>
                        <h2>¡<span className={styles.purple}>Muéstrale al mundo </span>lo que sabes hacer!</h2>
                        <h6>Si eres <span className={styles.purple}>Creativo / Freelancer</span> ¡Suira es para ti!</h6>
                    </div>
                </div>
                <div className={styles.profiles}>
                    <h3>Algunos de nuestros perfiles...</h3>
                    <div>
                        <Carousel responsive={responsive}
                        className={styles.carousel}
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        arrows={false}>
                            {this.dispalayProfiles()}
                        </Carousel>
                    </div>
                    <div className={styles.profilesButtons}>
                        <Link to={'/profiles'}>
                            <Button variant='outline-secondary' >Ver perfiles</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}