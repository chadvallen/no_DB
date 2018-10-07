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
                    <a href="https://www.starbucks.com/"><img className="footerLogo" src={logo}/></a>
                </footer>
            </div>
        )
    }
}

export default Footer;