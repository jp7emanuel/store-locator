import React, { Component } from 'react';


class MapsInfoWindowContent extends Component {
  render() {
    const { marker } = this.props;
    return (
      <div className="column">
        <h2 className="title is-5">{marker.name}</h2>
        <p>{marker.address}</p>
        <p>{marker.telephone}</p>
        <p>{marker.description}</p>
      </div>
    );
  }
}

export default MapsInfoWindowContent;
