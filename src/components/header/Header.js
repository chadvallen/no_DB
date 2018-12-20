import React from 'react'
import './Header.css'
import logo from '../images/logo2.png'
import siren from '../images/siren.jpg'

export default function Header() {
    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="reserve-logo" />
                <h1>Starbucks Reserve<sup><span className="tm">&#8482;</span></sup> Coffees</h1>
                <img className="siren" src={siren} alt="siren=logo"/>
            </header>
        </div>
    )
}


