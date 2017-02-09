import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openInfoWindow, closeInfoWindow } from '../../actions/maps';
import MapsInfoWindowContent from './info-window-content';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import ReactDOMServer from 'react-dom/server';
import _ from 'lodash';

class MapsIndex extends Component {
  handleMarkerClick = (marker) => {
    this.props.openInfoWindow(marker);
  }

  handleMarkerClose = (markerId) => {
    this.props.closeInfoWindow(markerId);
  }

  render() {
    const { markers, location, openedMarkers } = this.props;

    const renderMarkers = markers.map(marker => {
      return (
        <Marker
          key={marker._id}
          lat={marker.location.lat}
          lng={marker.location.lng}
          icon={'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}
          onClick={() => this.handleMarkerClick(marker)}
        />
      );
    });

    const renderInfoWindows = markers.map(marker => {
      if (!_.find(openedMarkers, itemId => itemId === marker._id)) { // marker id not found in openedMarkers array
        return false;
      }
      return (
        <InfoWindow
          key={marker._id}
          lat={marker.location.lat + 0.0022}
          lng={marker.location.lng}
          content={ReactDOMServer.renderToString(<MapsInfoWindowContent marker={marker} />)}
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
          params={{v: '3.exp', key: 'AIzaSyADN_LuQtGtfuQc08O5dvCFgNz_t3LpLKg', 'language': 'pt-BR', 'libraries': ['geometry', 'places']}}>
            {renderMarkers}
            {renderInfoWindows}
        </Gmaps>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.maps);
  return {
    openedMarkers: state.maps.openedMarkers
  }
}


export default connect(mapStateToProps, { openInfoWindow, closeInfoWindow })(MapsIndex);
