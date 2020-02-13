import React, { Component } from 'react'
import { getRole } from '../../authentication/authorization'
import {BrowserRouter as Switch, Route} from 'react-router-dom'

import ClienteList from '../cliente/cliente-list.component'
import ClienteCreate from '../cliente/cliente-create.component'
import ClienteDetail from '../cliente/cliente-detail.component'
import ClienteUpdate from '../cliente/cliente-update.component'

export default class AdminRoutes extends Component {
    render() {
        if (getRole() === 'admin') {
            return (
                <Switch>
                    <Route exact path='/clientes' component={ClienteList} />
                    <Route exact path='/clientes/create' component={ClienteCreate} />
                    <Route exact path='/clientes/:id/update' component={ClienteUpdate} />
                    <Route exact path='/clientes/:id' component={ClienteDetail} />
                </Switch>
            )
        }
        else {
            return <Route></Route>
        }
    }
}