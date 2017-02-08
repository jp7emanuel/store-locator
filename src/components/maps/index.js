import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class MapsIndex extends Component {
  render() {
    const { markers, zoomAt } = this.props;

    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={zoomAt}>
          {markers.map(marker => (
            <Marker {...marker}
            />
          ))}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(MapsIndex);
