import React from 'react'
import {Nav,Navbar,NavDropdown,FormControl,Form,Button} from 'react-bootstrap'
import logo from '../images/white_bg_noname.jpg';

import {TiShoppingCart} from 'react-icons/ti'


import './Navig.css'

function Navig() {
    return (
        <div class="navig">
            <div class="row">
              <div class="col-md-2">
                <img class="pull-left" src={logo} alt="logo"/>
                <h2 class="pull-left">Crevalto</h2>
              </div>
              <div class="col-md-7">
                <form>
                  <input type="input" name="search" placeholder="SEARCH"/>
                </form>
              </div>
              <div class="col-md-3" style={{paddingLeft:'0px'}}>
                  <Nav className="smalls">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Cart</Nav.Link>
                    <NavDropdown title="Others" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                  </Nav>
              </div>
            </div>
        </div>
    )
}

export default Navig
