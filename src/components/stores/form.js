import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import renderInputText from '../inputs/text';
import renderInputSelect from '../inputs/select';
import { requestStoreTypes } from '../../actions/store-types';

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'address', 'telephone', 'type', 'description', 'lat', 'lng'];

  _.each(requiredFields, field => {
    if (!values[field]) {
      errors[field] = 'Este campo é obrigatório';
    }
  });

  return errors;
}

class StoresForm extends Component {

  componentWillMount() {
    this.props.requestStoreTypes();
  }

  render () {
    const { types, handleSubmit, submitting } = this.props;
    const storeTypesOptions = types.map(type => {
      return {
        value: type._id,
        label: type.name,
      };
    });
    return (
      <form className="is-horizontal" onSubmit={handleSubmit}>
        <Field name="name" component={renderInputText} type="text" label="Nome da Loja:" />
        <Field name="address" component={renderInputText} type="text" label="Endereço:" />
        <Field name="telephone" component={renderInputText} type="text" label="Telefone:" />

        <div className="control is-grouped">
          <Field name="type" component={renderInputSelect} options={storeTypesOptions} label="Tipo:" />
          <Field name="lat" component={renderInputText} type="text" expanded label="Latitude:" />
          <Field name="lng" component={renderInputText} type="text" expanded label="Longitude:" />
        </div>

        <Field name="description" component={renderInputText} type="text" label="Descrição:" />

        <button className="button is-primary" type="submit" disabled={submitting}>Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    types: state.storeTypes.all
  }
}

StoresForm = reduxForm({
  form: 'storesForm',
  validate
})(StoresForm)

export default connect(mapStateToProps, { requestStoreTypes })(StoresForm)
