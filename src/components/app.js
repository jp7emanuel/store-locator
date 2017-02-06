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
              <a href="#" className="nav-item">
                <img src="/img/logo.svg" alt="Logo" />
              </a>
              <span className="nav-item">
                CI Store Locator
              </span>
            </div>
            <div className="nav-right nav-menu">
              <Link to="/create" className="nav-item">
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
