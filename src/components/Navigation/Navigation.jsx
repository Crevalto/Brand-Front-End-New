import React, { Component } from 'react'
import './Navigation.css'
import logo from "../images/purple_bg_noname.jpg";
export class Navigation extends Component {
    render() {
        return (
            <div class="navigation-body">
                <nav className="navigation">
                    <div className="navigation__logo">
                        <div className='row'>
                            <div className='col-2'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='col' style={{marginTop:"10px"}}>
                                 <h2>Crevalto</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a className="navigation__link" href="#">Dashboard</a>
                        <a className="navigation__link" href="#">Products</a>
                        <a className="navigation__link" href="#">CSR</a>
                        <a className="navigation__link" href="#">Profile</a>
                        <a className="navigation__link" href="#">Logout</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation
