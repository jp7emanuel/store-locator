import React, { Component } from 'react';
import {styles} from './styles';

class MapsInfoWindowContent extends Component {
  render() {
    const { marker } = this.props;
    return (
      <div className="column" style={styles.infoWindow}>
        <h2 className="title is-5">{marker.name}</h2>
        <p>{marker.address}</p>
        <p>{marker.telephone}</p>
        <p>{marker.description}</p>
      </div>
    );
  }
}

export default MapsInfoWindowContent;
