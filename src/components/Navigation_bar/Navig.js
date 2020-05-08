import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import logo from '../images/purple_bg_name.jpg';

import {TiShoppingCart} from 'react-icons/ti'


import './Navig.css'

function Navig() {
    return (
        <div>
            <Navbar expand="lg" className="sh" variant="dark">
                <Navbar.Brand  style={{backgroundColor:'#620b80',padding:'10px',borderRadius:'100px'}} href="/">
                  <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="logo"
                  />
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    <Nav.Link href="/">Home</Nav.Link>

                    </Nav>
                    <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <div style={{padding:'5px'}}></div>
                    <TiShoppingCart size={40}/>
                    </Nav>
                </Navbar.Collapse>

             </Navbar>
        </div>
    )
}

export default Navig
