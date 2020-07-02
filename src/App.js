import React from 'react';
import Header from './Header/Header';
import Searching from './Search/Searching';
import Body from './Body/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Searching />
      <Body tanim="tanım gelecek"/>
    </div>
  );
}

export default App;
