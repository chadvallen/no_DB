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
            picUrl: '',
            region: ''
        }
    }

    componentDidMount() {
        axios.get('/api/coffees').then(res => {
            
            this.setState({coffeeList: res.data})
        })
    }

    openDescription = () => {
        this.setState({readMore: true})
    }

    closeDescription = () => {
        this.setState({readMore: false})
    }

    createCoffee = () => {
        let newCoffee = {
            name: this.state.name,
            flavor: this.state.flavor,
            location: this.state.location,
            picUrl: this.state.picUrl,
            region: this.state.region,
            description: this.state.description
        }
        
        axios.post(`/api/coffees`, newCoffee).then(results => {
            
            this.setState({coffeeList: results.data})
        })
    }

    updateCoffee = (flavor, id) => {
        axios.put(`/api/coffees/${id}`, {flavor}).then(results => {
            this.setState({coffeeList: results.data})
        })
    }

    deleteCoffee = (id) => {
        axios.delete(`/api/coffees/${id}`).then(results => {
            this.setState({coffeeList: results.data})
        })
    }


    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    filterRegions = () => {
        let filtered = this.state.coffeeList.filter(item => {
            if (item.region === "Africa") {
                console.log(item);
                return item;
            } else if (item.region === "Latin America/South America") {
                return item;
            } else if (item.region === "Asia/Pacific") {
                return item;
            } 
                
            return (
                <div className="child">

                
                </div>
            )
        })
    }


    render() {
        
        let newArray  = this.state.coffeeList.map(item => {
            
            return (
             <div className="child">
                 <img src={item.picUrl} />
                 <h2>Name:  {item.name}</h2>

                 <button className="openButton" onClick={this.openDescription}>Description</button>

                 {this.state.readMore && 
                 <div>
                    
                     <p>Region: {item.region}</p>
                     <p>Flavor Notes: {item.flavor}</p>
                     <p>Location: {item.location}</p>
                     <p>Description: {item.description} <br></br></p> 
                     <div>

                        <label for="flavor">Update Flavors:</label>
                        <input name="flavor" onChange={event => this.inputHandler(event)}></input>
                        <button onClick={() => this.updateCoffee( this.state.flavor, item.id)}>Edit</button>
                        <button className="closeButton" onClick={this.closeDescription}>Show Less</button>
                    </div>
                </div>}
                 <br></br>
                <button className="closeButton padding" onClick={() => this.deleteCoffee(item.id)}>Delete</button>
                

             </div>
            )
        })

        return (

        <div>
            {/* <Selector filterRegions={this.props.filterRegions}/> */}
                <div className="parent">{newArray}
            
                    <div className="inputBox">
                        <h2>Add Coffee: </h2>
                        <label for="name">Name:</label>
                        <input name="name" onChange={event => this.inputHandler(event)}></input><br></br>
                        <label for="flavor">Flavors:</label>
                        <input name="flavor" onChange={event => this.inputHandler(event)}></input><br></br>
                        <label for="region">Region:</label>
                        <input name="region" onChange={event => this.inputHandler(event)}></input><br></br>
                        <label for="location">Location:</label>
                        <input name="location" onChange={event => this.inputHandler(event)}></input><br></br>
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