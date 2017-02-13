import React, { Component } from 'react';
import { connect } from 'react-redux';
import {styles} from './styles';
import MapsInfoWindowContent from './info-window-content';
import { fetchNearestsMarkers } from '../../actions/maps';

class MapsMarkerList extends Component {
  componentWillMount() {
    this.props.fetchNearestsMarkers(this.props.searchedLocation, this.props.markers);
  }

  render() {
    const { nearestsMarkers, searchedLocation } = this.props;

    if (!nearestsMarkers) {
      return <div> Loading... </div>;
    }

    const renderMakers = nearestsMarkers.map((marker, key) => {
      return (
        <div key={marker._id}>
          <MapsInfoWindowContent marker={marker} searchedLocation={searchedLocation} />
          { key !== (nearestsMarkers.length-1) ? <hr/> : "" }
        </div>
      );
    });

    return (
      <div className="stores-box">
        <h2 className="is-title">Lojas Mais Próximas</h2>

        <div className="rows is-fluid">
          {renderMakers}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nearestsMarkers: state.maps.nearestsMarkers
  }
}


export default connect(mapStateToProps, {fetchNearestsMarkers})(MapsMarkerList);
