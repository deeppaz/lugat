import React, { Component } from 'react'
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="bodyContainer">
                <div className="innerContainer">
                    <div className="tanimHeader">Tanım: </div>
                    <div className="tanimText">{this.props.tanim}</div>
                </div>
            </div>
        )
    }
}

export default Body
