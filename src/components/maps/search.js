import React, { Component } from 'react';
import {connect} from 'react-redux';
import {zoomMap} from '../../actions/maps';
import Geosuggest from 'react-geosuggest';
const inputSize = 280;

const styles = {
  locationSearch: {
    position: "absolute",
    top: 50,
    left: window.innerWidth < 920 ? (window.innerWidth-inputSize)/2 : 50
  },
  button: {
    backgroundColor: "#ff6900",
    width: "100%",
    border: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: '1.2em'
  },
  icon: {
    border: "none"
  }
}

class MapsSearch extends Component {
  onSuggestSelect = (suggest) => {
    this.props.zoomMap(suggest.location);
  }

  render() {
    return (
      <div style={styles.locationSearch}>
        <div>
          <a className="button" style={styles.button}>
            <span className="icon is-medium">
              <i className="fa fa-location-arrow"></i>
            </span>
            <span>Usar Minha Localização</span>
          </a>
        </div>

        <form>
          <div className="control has-icon has-icon-right">
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

export default connect(null, { zoomMap })(MapsSearch);


