import React from 'react';
import Header from './components/header/Header'
import Body from './components/body/Body'
import Weather from './components/weather/Weather'
import Footer from './components/footer/Footer.js'
import './App.css';

export default function App() {

    return (
      <div>
        <Header />
        <Body />
        <Weather />
        <Footer />
      </div>
    );
  }

