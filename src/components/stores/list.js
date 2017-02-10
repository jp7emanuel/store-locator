import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router';
import { requestStores, deleteStore } from '../../actions/stores';
import ReduxSweetAlert, { showAlert, dismissAlert } from 'react-redux-sweetalert';

class StoresList extends Component {
  componentWillMount() {
    this.props.requestStores();
  }

  handleDelete = (event, store) => {
    event.preventDefault();

    if(confirm(`Deseja remover a loja ${store.name} ?`)) {
      this.props.deleteStore(store._id);
      this.showSuccessAlert(store);
    }
  }

  showSuccessAlert = (store) => {
    this.props.showAlert({
      title: '',
      text: `Loja ${store.name} removida com sucesso!`,
      type: "success",
      onConfirm: this.props.dismissAlert
    });
  }

  render() {
    const { stores } = this.props;

    if (stores.length < 1) {
      return <div>Loading..</div>;
    }

    const renderList = stores.map((store, key) => {
      return (
        <tr key={store._id}>
          <td>{key+1}</td>
          <td>{store.name} </td>
          <td>{store.address} </td>
          <td>{store.telephone}</td>
          <td>
            <Link to={`/stores/edit/${store._id}`}>
              <span className="icon">
                <i className="fa fa-pencil"></i>
              </span>
            </Link>
            <a onClick={(event) => this.handleDelete(event, store)}>
              <span className="icon">
                <i className="fa fa-trash"></i>
              </span>
            </a>
          </td>
        </tr>
      )
    });

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Lista de Lojas</h1>
          <hr/>

          <table className="table is-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome da Loja</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {renderList}
            </tbody>
          </table>
        </div>

        <ReduxSweetAlert />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    stores: state.stores.all
  }
}

export default connect(mapStateToProps, { requestStores, deleteStore, showAlert, dismissAlert })(StoresList);
