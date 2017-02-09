import React, { Component } from 'react';
import MapsIndex from '../maps';
import MapsSearch from '../maps/search';

class StoresIndex extends Component {
  render() {
    return (
      <div className="container">
        <MapsSearch />
        <MapsIndex />
      </div>
    );
  }
}

export default StoresIndex;
