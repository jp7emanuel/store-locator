import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

function renderImage() {
  return (
    <figure className="image is-2by1">
      <img alt="Background" src="/img/background.jpg" />
    </figure>
  );
}

class MapsIndex extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -23.621415, lng: -46.686121 }}>
          {this.props.markers.map(marker => (
            <Marker {...marker}
            />
          ))}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(MapsIndex);
