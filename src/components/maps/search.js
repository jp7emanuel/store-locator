import React, { Component } from 'react';

const inputSize = 280;

const styles = {
  locationSearch: {
    position: "absolute",
    top: 40,
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
          <p className="control has-icon has-icon-right">
            <input className="input is-medium" type="email" placeholder="Digite sua localização.." style={styles.input}/>
            <span className="icon" style={styles.icon}>
              <i className="fa fa-search"></i>
            </span>
          </p>
        </form>
      </div>
    );
  }
}

export default MapsSearch;


