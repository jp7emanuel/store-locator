import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapsIndex from './index';
import { requestMarkers } from '../../actions/maps';

function renderImage() {
  return (
    <figure className="image is-2by1">
      <img alt="Background" src="/img/background.jpg" />
    </figure>
  );
}

class MapsContainer extends Component {
  componentWillMount() {
    this.props.requestMarkers();
  }

  render() {
    const { markers, location, fetching } = this.props;

    if (fetching || !location || markers.length < 1) {
      return renderImage();
    }

    return (
      <div style={{height: '500px'}}>
        <MapsIndex
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          markers={markers}
          location={location}
        />
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

export default connect(mapsStateToProps, { requestMarkers })(MapsContainer);
