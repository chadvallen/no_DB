import React, { Component } from 'react'
import './Footer.css'
import logo from '../images/transparentlogo.png'

export default function Footer() {
        return (
            <div>
                <footer>
                    <p>Made by Chad Allen <span>&#9733;</span></p>
                    <a href="https://www.starbucks.com/"><img className="footerLogo" src={logo}/></a>
                    <p className="examplePic">https://westeurope-cdn.azureedge.net/coffee-media/CoffeeDetail_CoffeeCard_JamaicaBlueMountain_1100x1100.jpg</p>
                </footer>
            </div>
        )
    
}

