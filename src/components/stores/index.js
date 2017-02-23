import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router';
import MapsIndex from '../maps';
import MapsSearch from '../maps/search';
import { requestStores } from '../../actions/stores';

function renderImage() {
  return (
    <figure className="image is-2by1">
      <img alt="Background" src="/img/background.png" />
    </figure>
  );
}

class StoresIndex extends Component {
  componentWillMount() {
    this.props.requestStores();
  }

  render() {
    const { stores, fetching, location, searchedLocation } = this.props;


    if (stores.length < 1) {
      return (
        <div className="container" style={{ marginTop: 40 }}>
          <div className="notification is-primary">
            Nenhuma loja cadastrada no momento.
            <br/>
            Você deve cadastrar ao menos uma loja para obter as funcionalidades de busca no mapa.
            <br/>
            <Link to="/stores/create" style={{color: 'white', textDecoration: 'underline' }} className="is-link">Clique aqui para cadastrar </Link>
          </div>
        </div>
      );
    }

    if (fetching || !location || !searchedLocation) {
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
        <MapsIndex markers={stores} location={location} searchedLocation={searchedLocation} />
      </div>
    );
  }
}

function mapsStateToProps(state) {
  return {
    stores: state.stores.all,
    fetching: state.stores.fetching,
    location: state.maps.location,
    searchedLocation: state.maps.searchedLocation
  }
}

export default connect(mapsStateToProps, {requestStores})(StoresIndex);
