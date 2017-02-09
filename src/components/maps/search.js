import React, { Component } from 'react';
import {connect} from 'react-redux';
import {search, requestSearching} from '../../actions/maps';
import Geosuggest from 'react-geosuggest';
import {styles} from './styles';
import OverlaySpinner from '../loadings/spinner';

class MapsSearch extends Component {
  onSuggestSelect = (suggest) => {
    this.props.requestSearching();
    this.props.search(suggest.location);
  }

  handleCLickMyLocation = (event) => {
    event.preventDefault();

    this.props.requestSearching();
    navigator.geolocation.getCurrentPosition((position) => {
      let location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }

      this.props.search(location);
    });
  }

  render() {
    const {searching} = this.props;

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

        <form>
          <div className="control has-icon has-icon-right" style={styles.geosuggest}>
            <Geosuggest
              placeholder="Digite sua localização.."
              onSuggestSelect={this.onSuggestSelect}
              style={styles.input}
            />
            <span className="icon" style={styles.icon}>
              <i className="fa fa-search"></i>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searching: state.maps.searching
  }
}

export default connect(mapStateToProps, { search, requestSearching })(MapsSearch);


