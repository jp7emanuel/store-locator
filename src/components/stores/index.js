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
    const { markers } = this.props;

    return (
      <div className="container" style={styles.container}>
        <MapsContainer />
        <MapsSearch />
      </div>
    );
  }
}

export default StoresIndex;
