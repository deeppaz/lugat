import React, { Component } from 'react'
import Header from './Header/Header';
import Searching from './Search/Searching';
import Body from './Body/Body';

import filterLugat from './filterLugat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Searching />
        <Body tanim="tanım gelecek" />
      </div>
    )
  }
}

export default App
