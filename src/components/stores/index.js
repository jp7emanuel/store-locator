import React, { Component } from 'react';
import { connect } from 'react-redux';

const inputSize = 280;

const styles = {
  container: {
    position: "relative"
  },
  locationSearch: {
    backgroundColor: 'white',
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

class StoresIndex extends Component {
  render() {
    return (
      <div className="container" style={styles.container}>
        <img alt="Background" src="/img/background.jpg" />
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
      </div>
    );
  }
}

export default connect()(StoresIndex);
