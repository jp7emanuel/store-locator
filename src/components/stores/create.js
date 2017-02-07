import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoresForm from './form';
import { saveStore } from '../../actions/stores';

class StoresCreate extends Component {
  handleSubmit = (values) => {
    this.props.saveStore(values);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Cadastro de Lojas</h1>
          <hr/>

          <StoresForm onSubmit={this.handleSubmit} />
        </div>
      </section>
    );
  }
}


export default connect(null, { saveStore })(StoresCreate);
