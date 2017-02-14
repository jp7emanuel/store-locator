import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openInfoWindow, closeInfoWindow } from '../../actions/maps';
import MapsInfoWindowContent from './info-window-content';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import ReactDOMServer from 'react-dom/server';
import _ from 'lodash';
import MapsMarkerList from './marker-list';

class MapsIndex extends Component {
  handleMarkerClick = (marker) => {
    this.props.openInfoWindow(marker);
  }

  handleMarkerClose = (markerId) => {
    this.props.closeInfoWindow(markerId);
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  render() {
    const { markers, location, openedMarker, searchedLocation } = this.props;

    const renderMarkers = markers.map(marker => {
      return (
        <Marker
          key={marker._id}
          lat={marker.location.lat}
          lng={marker.location.lng}
          icon={'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'}
          onClick={() => this.handleMarkerClick(marker)}
        />
      );
    });

    const renderInfoWindows = markers.map(marker => {
      if (openedMarker !== marker._id) {
        return false;
      }
      return (
        <InfoWindow
          key={marker._id}
          lat={marker.location.lat + 0.0022}
          lng={marker.location.lng}
          content={ReactDOMServer.renderToString(<MapsInfoWindowContent marker={marker} searchedLocation={searchedLocation} />)}
          onCloseClick={() => this.handleMarkerClose(marker._id)}
        />
      );
    })

    return (
      <div>
        <Gmaps
          width={'100%'}
          height={'500px'}
          lat={location.lat}
          lng={window.innerWidth < 920 ? location.lng : (location.lng - 0.0125)}
          zoom={14}
          params={{v: '3.exp', key: 'AIzaSyADN_LuQtGtfuQc08O5dvCFgNz_t3LpLKg', 'language': 'pt-BR', 'libraries': ['geometry', 'places']}}
          onMapCreated={this.onMapCreated}>
            {renderMarkers}
            {renderInfoWindows}
        </Gmaps>

        <MapsMarkerList markers={markers} searchedLocation={searchedLocation}  />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    openedMarker: state.maps.openedMarker
  }
}


export default connect(mapStateToProps, { openInfoWindow, closeInfoWindow })(MapsIndex);
