import React, { Component } from 'react'
import axios from 'axios';
import './Body.css'

class Body extends Component {
    constructor() {
        super();

        this.state = {
            coffeeList: [],
            readMore: false
        }
        
    }

    componentDidMount() {
        axios.get('/api/coffees').then(res => {
            console.log(res.data)
            this.setState({coffeeList: res.data})
        })
    }

    openDescription = () => {
        this.setState({readMore: true})
    }

    closeDescription = () => {
        this.setState({readMore: false})
    }


    render() {
        let newArray  = this.state.coffeeList.map(item => {
            console.log(item, item.name)
            return (
             <div className="child">
                 <img src={item.picUrl} />
                 <h2>Name:  {item.name}</h2>
                 <button className="openButton" onClick={this.openDescription}>Description</button>
                 {this.state.readMore && <div>
                    <button className="closeButton" onClick={this.closeDescription}>Show Less</button>
                 <p>Flavor Notes: {item.flavor}</p>
                 <p>Location: {item.location}</p>
                 
                
                 <p>Description: {item.description} <br></br>
                 </p> </div>}

                 
             </div>
            )
        })
        return (

            <div className="parent">{newArray}</div>
        )
    }
}

export default Body;