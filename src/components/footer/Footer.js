import React, { Component } from 'react'
import './Footer.css'
import logo from '../images/transparentlogo.png'

export default function Footer() {
   

   
        return (
            <div>
                <footer>
                    <p>Made by Chad Allen</p>
                    <a href="https://www.starbucks.com/"><img className="footerLogo" src={logo}/></a>
                </footer>
            </div>
        )
    
}

