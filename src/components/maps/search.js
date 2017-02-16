import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {search, requestSearching} from '../../actions/maps';
import Geosuggest from 'react-geosuggest';
import {styles} from './styles';
import OverlaySpinner from '../loadings/spinner';
import ReduxSweetAlert, { showAlert, dismissAlert } from 'react-redux-sweetalert';

class MapsSearch extends Component {

  static propTypes = {
    markers: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  onSuggestSelect = (suggest) => {
    if (suggest.location) {
      this.props.requestSearching();
      this.props.search(suggest.location, this.props.markers);

      return true;
    }

    this.props.showAlert({
      title: 'Erro!',
      text: 'Localização não encontrada',
      type: "error",
      onConfirm: this.props.dismissAlert,
      onClose: this.props.dismissAlert,
      onOutsideClick: this.props.dismissAlert
    });
  }

  handleCLickMyLocation = (event) => {
    this.props.requestSearching();
    navigator.geolocation.getCurrentPosition((position) => {
      let location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }

      this.props.search(location, this.props.markers);
    });
  }

  render() {
    const { searching, searchedAddres } = this.props;
    return (
      <div style={styles.locationSearch}>
        { searching && (<OverlaySpinner />) }

        <div style={styles.addSize}>
          <button className="button" style={styles.button} onClick={ (event) => this.handleCLickMyLocation(event) }>
            <span className="icon is-medium">
              <i className="fa fa-location-arrow"></i>
            </span>
            <span>Usar Minha Localização</span>
          </button>
        </div>

        <div className="control has-icon has-icon-right" style={styles.geosuggest}>
          <Geosuggest
            placeholder="Digite um endereço..."
            onSuggestSelect={this.onSuggestSelect}
            className="search"
            initialValue={searchedAddres ? searchedAddres : ''}
            style={styles.input}
          />
          <span className="icon" style={styles.icon}>
            <i className="fa fa-search"></i>
          </span>
        </div>

        <ReduxSweetAlert />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searching: state.maps.searching,
    searchedAddres: state.maps.searchedAddress
  }
}

export default connect(mapStateToProps, { search, requestSearching, showAlert, dismissAlert })(MapsSearch);


