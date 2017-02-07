import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapsIndex from './index';
import { requestMarkers } from '../../actions/maps';

class MapsContainer extends Component {
  componentWillMount() {
    this.props.requestMarkers();
  }

  render() {
    const markersToRender = [];
    this.props.markers.map((marker, key) => {
      let newMarker = {
        position: {
          lat: marker.lat,
          lng: marker.lng
        },
        key: 'Taiwan'+key,
        defaultAnimation: 2
      };
      markersToRender.push(newMarker);
    });

    if (markersToRender.length < 1) {
      return <div>Loading..</div>;
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
          markers={markersToRender}
        />
      </div>
    );
  }
}

function mapsStateToProps(state) {
  return {
    markers: state.maps.markers
  }
}

export default connect(mapsStateToProps, { requestMarkers })(MapsContainer);
