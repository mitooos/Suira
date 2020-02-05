import React, { Component } from 'react'
import axios from 'axios'
import ProfileCrad from './child-components/profile-card';
import CardDeck from 'react-bootstrap/CardDeck'

export default class ProfileList extends Component{
    constructor(props){
        super(props)
        this.state = {
            profiles: []
        }
    }

    componentDidMount(){
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

    dispalayProfiles(){
        return this.state.profiles.map((res, i) => {
            const profile = {
                id: res.id,
                nombre: res.cliente[0]?res.cliente[0].nombre:'undefined',
                descripcion: res.descripcion,
                ruta_imagen: 'profile_pic.png'
            }
            return <ProfileCrad obj={profile} key={i}/>
        })
    }


    render(){
        return(
            <CardDeck>
                {this.dispalayProfiles()}
            </CardDeck>
        )
    }
}