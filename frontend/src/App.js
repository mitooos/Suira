import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProfileList from './components/profile/profile-list.component';
import ProfileDetail from './components/profile/profile-detail.component';

import HomeComponent from './components/home/home.component';

import Footer from './components/footer/footer.component'

import Login from './components/login/login.component'

import AdminNavbar from './components/admin/navbar'
import AdminRoutes from './components/admin/routes'

import LogOutButton from './components/authenticated/log-out-button'


function App() {

  return (<Router>
    <div className='App'>
      <Navbar bg='light' expand='sm'>
        <Navbar.Brand href='/'><img src="/logo.jpeg" alt="logo suira" /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <AdminNavbar/>
            <Nav.Link href='/profiles'>Perfiles</Nav.Link>
          </Nav>
          <LogOutButton/>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <div className='wrapper'>
            <AdminRoutes/>
              <Switch>
                <Route exact path='/profiles' component={ProfileList} />
                <Route exact path='/profiles/:id' component={ProfileDetail} />

                <Route exact path='/login' component={Login} />

                <Route exact path='/' component={HomeComponent} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
  </Router>

  )
}

export default App
