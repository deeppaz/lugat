import React, { Component } from 'react'
import Header from './Header/Header';
import Searching from './Search/Searching';
import Body from './Body/Body';

import filterLugat from './filterLugat';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredLugat: filterLugat("")
    };
  }
  handleSearchChange = event => {
    this.setState({
      filteredLugat: filterLugat(event.target.value)
    });
    console.log(this.state.filteredLugat)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Searching textChange={this.handleSearchChange}/>
        <Body tanim={this.state.filteredLugat} />
      </div>
    )
  }
}

export default App
