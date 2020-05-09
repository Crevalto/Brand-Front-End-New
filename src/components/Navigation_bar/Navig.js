import React from 'react'
import {Nav,NavDropdown} from 'react-bootstrap'
import logo from '../images/white_bg_noname.jpg';




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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <NavDropdown title="Others" id="collasible-nav-dropdown">
                      <NavDropdown.Item className="nav_item" href="/merchant">Merchant</NavDropdown.Item>
                      <NavDropdown.Item className="nav_item" href="/landing">Landing</NavDropdown.Item>
                      <NavDropdown.Item className="nav_item" href="/greeting">Greeting</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className="nav_item" href="/register">Sign Up</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </Nav>
              </div>
            </div>
        </div>
    )
}

export default Navig
