import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <div className="headerText">
                    <span className="blue">Lugat</span> App
                </div>
                <div className="lowerHeader">
                    Sadece <span className="blue">kelimeyi</span> yazın ve tanımı görün!
            </div>
            </div>
        )
    }
}

export default Header
