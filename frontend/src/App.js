import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ClienteList from './components/cliente/cliente-list.component'
import ClienteCreate from './components/cliente/cliente-create.component'
import ClienteDetail from './components/cliente/cliente-detail.component'
import ClienteUpdate from './components/cliente/cliente-update.component'

import ProfileList from './components/profile/profile-list.component';
import ProfileDetail from './components/profile/profile-detail.component';

import HomeComponent from './components/home/home.component';

function App () {
  return (<Router>
    <div className='App'>
      <Navbar bg='light' expand='sm'>
        <Navbar.Brand href='/'>Suira</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/clientes'>Clientes</Nav.Link>
            <Nav.Link href='/profiles'>Perfiles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <div className='wrapper'>
              <Switch>
                <Route exact path='/clientes' component={ClienteList} />
                <Route exact path='/clientes/create' component={ClienteCreate} />
                <Route exact path='/clientes/:id/update' component={ClienteUpdate} />
                <Route exact path='/clientes/:id' component={ClienteDetail} />

                <Route exact path='/profiles' component={ProfileList} />
                <Route exact path='/profiles/:id' component={ProfileDetail} />

                <Route exact path='/' component={HomeComponent} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
          </Router>
  )
}

export default App
