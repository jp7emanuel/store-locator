import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestStore, editStore } from '../../actions/stores';
import StoresForm from './form';
import ReduxSweetAlert, { showAlert, dismissAlert } from 'react-redux-sweetalert';
import Redirect from 'react-router/Redirect';

class StoresEdit extends Component {

  state = { saved: false };

  componentWillMount() {
    this.props.requestStore(this.props.params.id);
  }

  handleSubmit = (values) => {
    this.props.editStore(values);
    this.props.showAlert({
      title: '',
      text: 'Loja Editada com sucesso!',
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
      return <Redirect to="/" />;
    }

    const { store, fetching } = this.props;

    if (!store || fetching ) {
      return <div>Loading..</div>;
    }

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Editar Loja</h1>
          <hr/>

          <StoresForm initialValues={store} onSubmit={this.handleSubmit} />
        </div>

        <ReduxSweetAlert />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state.stores.store,
    fetching: state.stores.fetching
  }
}

export default connect(mapStateToProps, { requestStore, editStore, showAlert, dismissAlert })(StoresEdit);
