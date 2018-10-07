import React, { Component } from 'react'
import axios from 'axios'
import '../weather/Weather.css'

class Weather extends Component {
    constructor() {
        super();

        this.state = {
            currentTemp: []
        }
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Seattle,US?&units=imperial&APPID=1c8ae511c3b5378d5bfb7ab656887f59
    `)
    .then(res => {
            
            console.log(res.data.main)
            this.setState({currentTemp: [res.data.main]})
        })
    }

    render() {
        let weather = this.state.currentTemp.map(item => {
            return (
            <span>
                {Math.floor(item.temp)}
            </span>
            )
        })
        return (
            <div className="weather">
            <p className="weather-text" ><a href="https://openweathermap.org/city/5809844">Current temp in Seattle, WA: {weather}<span>&#8457;</span></a></p>
            </div>
        )
    }
}

export default Weather;