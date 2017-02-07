import React, { Component } from 'react';
import MapsContainer from '../maps/container';
import MapsSearch from '../maps/search';

const styles = {
  container: {
    position: "relative"
  }
}

class StoresIndex extends Component {
  render() {
    return (
      <div className="container" style={styles.container}>
        <MapsContainer />
        <MapsSearch />
      </div>
    );
  }
}

export default StoresIndex;
