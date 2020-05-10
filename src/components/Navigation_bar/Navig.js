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
                    <Nav.Link href="/home">
                    <svg class="bi bi-house-fill" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
                      <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z" clip-rule="evenodd"/>
                      </svg>
                    </Nav.Link>
                    <Nav.Link href="/login">
                    <svg class="bi bi-person" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
                    </svg>
                    </Nav.Link>
                    <Nav.Link href="/cart">
                    <svg class="bi bi-geo-alt" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                  </svg>
                  </Nav.Link>
                  <Nav.Link href="/cart">
                  <svg class="bi bi-chat-fill" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z"/>
</svg>
                  </Nav.Link>
                  <Nav.Link href="/cart">Cart</Nav.Link>
                  </Nav>
              </div>
            </div>
        </div>
    )
}

export default Navig
