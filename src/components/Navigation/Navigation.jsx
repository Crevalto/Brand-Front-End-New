import React, { Component } from 'react'
import './Navigation.css'
export class Navigation extends Component {
    render() {
        return (
            <div class="navigation-body paddertop">
                <nav className="navigation">
                    <div className="navigation__logo">
                        <h2>Crevalto</h2>
                    </div>
                    <div>
                        <a className="navigation__link" href="#">Login</a>
                        <a className="navigation__link" href="#">About Us</a>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Navigation
