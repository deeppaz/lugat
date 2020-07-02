import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Searching.css'

class Searching extends Component {
    handleChange = event => {
        this.props.textChange(event);
    }
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

Searching.propTypes = {
    textChange: PropTypes.func
};


export default Searching
