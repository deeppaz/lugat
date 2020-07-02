import React, { Component } from 'react'
import './Searching.css'

class Searching extends Component {
    render() {
        return (
            <div className="searchContainer">
                <div>
                    <input onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}

export default Searching
