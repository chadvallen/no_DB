import React, { Component } from 'react'
import './Footer.css'
import logo from '../images/transparentlogo.png'

class Footer extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <footer>
                    <p>Made by Chad Allen</p>
                    <img className="footerLogo" src={logo}/>
                </footer>
            </div>
        )
    }
}

export default Footer;