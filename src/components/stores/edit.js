import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestStore, editStore } from '../../actions/stores';
import StoresForm from './form';
import ReduxSweetAlert, { showAlert, dismissAlert } from 'react-redux-sweetalert';

class StoresEdit extends Component {
  componentWillMount() {
    this.props.requestStore(this.props.params.id);
  }

  handleSubmit = (values) => {
    this.props.editStore(values);
    this.props.showAlert({
      title: '',
      text: 'Loja Editada com sucesso!',
      type: "success",
      onConfirm: this.props.dismissAlert,
    });
  }

  render() {
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
