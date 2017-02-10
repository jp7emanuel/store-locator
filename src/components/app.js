import React, { Component } from 'react';
import { Link } from 'react-router';
import Routes from '../routes/router';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <Link to="/" className="nav-item">
                <span className="icon"><i className="fa fa-compass"></i> Store Locator</span>
              </Link>
            </div>
            <div className="nav-right nav-menu">
              <Link to="/stores" className="nav-item">
                Gerenciar Lojas
              </Link>
              <Link to="/stores/create" className="nav-item">
                Cadastrar Lojas
              </Link>
            </div>
          </div>
        </nav>

        <Routes />
      </div>
    );
  }
}

export default App;
