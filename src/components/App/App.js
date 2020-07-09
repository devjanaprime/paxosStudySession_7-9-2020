import React, { Component } from 'react';
import SubComponent from '../SubComponent/SubComponent';
import OtherComponent from '../OtherComponent/OtherComponent';

class App extends Component{
  
  state = {
    thingy: 'tester value!'
  }

  render() {
    return (
      <div>
        <h2>app</h2>
        <p>From App state: { this.state.thingy }</p>
        <SubComponent thinger={ this.state.thingy }/>
        <OtherComponent />
      </div>
    ); // end jsx
  } // end render
} // end class

export default App;
