import React, { Component } from 'react';
import MapsContainer from '../maps/container';
import MapsSearch from '../maps/search';

class StoresIndex extends Component {
  render() {
    return (
      <div className="container">
        <MapsSearch />
        <MapsContainer />
      </div>
    );
  }
}

export default StoresIndex;
