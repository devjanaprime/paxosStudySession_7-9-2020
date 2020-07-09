import React, { Component } from 'react';

class SubComponent extends Component{
  
  componentDidMount(){
    console.log( 'SubComponent here!:', this.props );
  } // componentDidMount

  render() {
    return (
      <div>
        <h3>SubComponent</h3>
        <p>From props: { this.props.thinger }</p>
      </div>
    ); // end jsx
  } // end render
} // end class

export default SubComponent;
