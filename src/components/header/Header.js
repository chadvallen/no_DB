import React, { Component } from 'react'
import './Header.css'
import logo from '../images/logo2.png'
import siren from '../images/siren.jpg'

class Header extends Component {
    constructor() {
        super();

        
    }

    render() {
        return (
            <div>
                <header>
                 <img className="logo" src={logo} />
                 <h1>Starbucks Reserve Collection</h1>
                 <img className="siren" src={siren} />
                </header>
            </div>
        )
    }
}

export default Header;