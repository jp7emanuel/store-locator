import React, { Component } from 'react';
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
  input: {
    width: inputSize
  },
  icon: {
    border: "none",
    top: "1.40rem"
  }
}

class MapsSearch extends Component {
  onSuggestSelect(suggest) {
    console.log(suggest);
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
              className="input is-medium"
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

export default MapsSearch;


