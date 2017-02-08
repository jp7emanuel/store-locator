import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import MapsInfoWindowContent from './info-window-content';
import {openInfoWindow, closeInfoWindow} from '../../actions/maps';

class MapsIndex extends Component {
  onMarkerClick = (markerId) => {
    this.props.openInfoWindow(markerId);
  }

  onMarkerClose = (markerId) => {
    this.props.closeInfoWindow(markerId);
  }

  render() {
    const { markers, center } = this.props;
    const renderMakers = markers.map(marker => {
      return (
        <Marker
          key={marker._id}
          position={marker.location}
          onClick={() => this.onMarkerClick(marker._id)}>
          {
            marker.showInfo && (
              <InfoWindow key={marker._id} onCloseClick={() => this.onMarkerClose(marker._id)}>
                <MapsInfoWindowContent marker={marker} />
              </InfoWindow>
            )
          }
        </Marker>
      )
    });

    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={center}>
          {renderMakers}
      </GoogleMap>
    );
  }
}

export default connect(null, {openInfoWindow, closeInfoWindow})(withGoogleMap(MapsIndex));
