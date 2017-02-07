import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class MapsIndex extends Component {
  render() {
    const { markers } = this.props;

    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -23.621415, lng: -46.686121 }}>
          {markers.map(marker => (
            <Marker {...marker}
            />
          ))}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(MapsIndex);
