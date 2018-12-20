import React, { Component } from 'react'
import axios from 'axios';
import './Body.css';
// import Selector from '../selector/Selector'

class Body extends Component {
    constructor() {
        super();

        this.state = {
            coffeeList: [],
            readMore: false,
            name: '',
            flavor: '',
            location: '',
            picUrl: ''
        }
    }

    // API Call to receive coffee list
    componentDidMount() {
        axios.get('/api/coffees').then(res => {
            this.setState({coffeeList: res.data})
        })
    }

    // Method to open descriptions
    openDescription = () => {
        this.setState({readMore: true})
    }

    // Method to close description
    closeDescription = () => {
        this.setState({readMore: false})
    }

    // Method to add new coffee to API
    createCoffee = () => {
        let newCoffee = {
            name: this.state.name,
            flavor: this.state.flavor,
            location: this.state.location,
            picUrl: this.state.picUrl,
            description: this.state.description
        }
        axios.post(`/api/coffees`, newCoffee).then(results => {
            this.setState({coffeeList: results.data})
        })
    }

    // Method to update flavor for selected coffee
    updateCoffee = (flavor, id) => {
        axios.put(`/api/coffees/${id}`, {flavor}).then(results => {
            this.setState({coffeeList: results.data})
        })
    }

    // Method to delete coffee from API
    deleteCoffee = (id) => {
        axios.delete(`/api/coffees/${id}`).then(results => {
            this.setState({coffeeList: results.data})
        })
    }

    // Method to handle onChange inputs
    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    
    render() { 
        // Function to map over coffeeList array to display coffes
        let newArray  = this.state.coffeeList.map(item => {
            return (
             <div className="child">
                 <img src={item.picUrl} alt="pictureUrl" />
                 <h2>{item.name}</h2>

                 {/* Button to open description for coffees */}
                 <button className="openButton" onClick={this.openDescription}>Description</button>
                 {this.state.readMore && 
                 <div>
                     <p className= "upper">{item.location}</p>
                     <p>Flavor Notes: {item.flavor}</p>
                     <p>Description: {item.description} <br></br></p> 
                     <div>
                        <label for="flavor">Update Flavors:</label>
                        <input name="flavor" onChange={event => this.inputHandler(event)}></input>
                        <button onClick={() => this.updateCoffee( this.state.flavor, item.id)}>Edit</button>
                        <button className="closeButton" onClick={this.closeDescription}>Show Less</button>
                    </div>
                </div>}
                 <br></br>
                 {/* Button to close description for coffees */}
                <button className="closeButton padding" onClick={() => this.deleteCoffee(item.id)}>Delete</button>
             </div>
            )
        })

        return (
        <div>
            {/* Link to Store Locater Page */}
            <h6><a href="https://www.starbucks.com/store-locator" target="_blank" rel="noopener noreferrer"><span>&#8592;</span> Store Locator</a></h6>
            {/* Link to Starbucks Reserve Page */}
            <h5><a href="https://www.starbucksreserve.com/en-us/coffee/archive" target="_blank" rel="noopener noreferrer">More Reserve Coffees <span> &#8594;</span></a></h5>
                
                {/* Opening tag to the body/parent page */}
                <div className="parent">{newArray}
            
                {/* Add coffee input box */}
                <div className="inputBox">
                    <h2>Add Coffee: </h2>
                    <label for="name">Coffee Name:</label>
                    <input name="name" onChange={event => this.inputHandler(event)}></input><br></br>
                    <label for="location">Location:</label>
                    <input name="location" onChange={event => this.inputHandler(event)}></input><br></br>
                    <label for="flavor">Flavors:</label>
                    <input name="flavor" onChange={event => this.inputHandler(event)}></input><br></br>
                    <label for="description">Notes:</label>
                    <textarea name="description" rows="5" cols="30" onChange={event => this.inputHandler(event)}></textarea><br></br>
                    <label for="picUrl">Add picture URL:</label>
                    <input name="picUrl" onChange={event => this.inputHandler(event)}></input>
                    <button className="openButton" onClick={() => this.createCoffee()}>Add</button>
                </div>
            </div> 
        </div>
        )
    }
}

export default Body;