import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoresForm from './form';
import { saveStore } from '../../actions/stores';
import ReduxSweetAlert, { showAlert, dismissAlert } from 'react-redux-sweetalert';
import Redirect from 'react-router/Redirect';

class StoresCreate extends Component {
  state = { saved: false };

  handleSubmit = (values) => {
    this.props.saveStore(values);
    this.props.showAlert({
      title: '',
      text: 'Loja Cadastrada com sucesso!',
      type: "success",
      onConfirm: this.handleDismiss,
      onClose: this.handleDismiss,
      onOutsideClick: this.handleDismiss
    });
  }

  handleDismiss = () => {
    this.props.dismissAlert();
    this.setState({ saved: true });
  }

  render() {
    if (this.state.saved) {
      return <Redirect to="/stores" />;
    }

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
