import React, { Component } from 'react'
import './Selector.css'

export default function Selector(props) {
        const { filterRegions } = this.props;

        return (
            <div class="selector">
                <h4>Region</h4>
                <select class="selectBox">
                    <option>--</option>
                    <option value="latinAmerica">Latin America/South America</option>
                    <option value="asianPacific">Asia/Pacific</option>
                    <option value="african">Africa</option>
                </select>
                <button onClick={filterRegions}>Submit</button>
            </div>
        )
    
}

