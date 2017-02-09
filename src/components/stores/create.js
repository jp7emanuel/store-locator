import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoresForm from './form';
import { saveStore } from '../../actions/stores';
import ReduxSweetAlert, { showAlert, dismissAlert } from 'react-redux-sweetalert';

class StoresCreate extends Component {
  handleSubmit = (values) => {
    this.props.saveStore(values);
    this.props.showAlert({
      title: '',
      text: 'Loja Cadastrada com sucesso!',
      type: "success",
      onConfirm: this.props.dismissAlert,
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Cadastro de Lojas</h1>
          <hr/>

          <StoresForm onSubmit={this.handleSubmit} />
        </div>

        <ReduxSweetAlert />
      </section>
    );
  }
}


export default connect(null, { saveStore, showAlert, dismissAlert })(StoresCreate);
