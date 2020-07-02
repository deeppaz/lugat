import React, { Component } from 'react'
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="bodyContainer">
                <div className="innerContainer">
                    <div className="definitionHeader">Tanım: </div>
                    <div className="definitionText">{this.props.definition}</div>
                </div>
            </div>
        )
    }
}

export default Body
