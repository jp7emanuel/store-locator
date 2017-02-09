import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapsIndex from '../maps';
import MapsSearch from '../maps/search';
import { requestStores } from '../../actions/stores';

function renderImage() {
  return (
    <figure className="image is-2by1">
      <img alt="Background" src="/img/background.jpg" />
    </figure>
  );
}

class StoresIndex extends Component {
  componentWillMount() {
    this.props.requestStores();
  }

  render() {
    const { stores, fetching, location } = this.props;

    if (fetching || !location) {
      return (
        <div className="container">
          <MapsSearch markers={stores} />
          {renderImage()}
        </div>
      );
    }

    return (
      <div className="container">
        <MapsSearch markers={stores} />
        <MapsIndex markers={stores} location={location} />
      </div>
    );
  }
}

function mapsStateToProps(state) {
  return {
    stores: state.stores.all,
    fetching: state.stores.fetching,
    location: state.maps.location
  }
}

export default connect(mapsStateToProps, {requestStores})(StoresIndex);
