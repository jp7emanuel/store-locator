import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestMarkers, openInfoWindow, closeInfoWindow } from '../../actions/maps';
import MapsInfoWindowContent from './info-window-content';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import ReactDOMServer from 'react-dom/server';

function renderImage() {
  return (
    <figure className="image is-2by1">
      <img alt="Background" src="/img/background.jpg" />
    </figure>
  );
}

class MapsIndex extends Component {
  componentWillMount() {
    this.props.requestMarkers();
  }

  handleMarkerClick = (marker) => {
    this.props.openInfoWindow(marker);
  }

  handleMarkerClose = (marker) => {
    this.props.closeInfoWindow(marker);
  }

  render() {
    const { markers, location, fetching } = this.props;

    if (fetching || !location || markers.length < 1) {
      return renderImage();
    }

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
      if (!marker.showInfo) {
        return false;
      }
      return (
        <InfoWindow
          key={marker._id}
          lat={marker.location.lat + 0.0022}
          lng={marker.location.lng}
          content={ReactDOMServer.renderToString(<MapsInfoWindowContent marker={marker} />)}
          onCloseClick={() => this.handleMarkerClose(marker)}
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

function mapsStateToProps(state) {
  return {
    markers: state.maps.markers,
    location: state.maps.location,
    fetching: state.maps.fetching
  }
}

export default connect(mapsStateToProps, { requestMarkers, openInfoWindow, closeInfoWindow })(MapsIndex);
