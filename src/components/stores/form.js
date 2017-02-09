import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import renderInputText from '../inputs/text';
import renderInputSelect from '../inputs/select';
import renderInputGeosuggest from '../inputs/geosuggest';
import { requestStoreTypes } from '../../actions/store-types';

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'location', 'telephone', 'type', 'description'];

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

  onSuggestSelect = (suggest) => {
    this.props.change('lat', suggest.location.lat);
    this.props.change('lng', suggest.location.lng);
    this.props.change('address', suggest.gmaps.formatted_address);
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
        <Field name="lat" component="input" type="hidden"/>
        <Field name="lng" component="input" type="hidden"/>
        <Field name="address" component="input" type="hidden"/>

        <Field name="name" component={renderInputText} type="text" label="Nome da Loja:" />
        <Field name="location" component={renderInputGeosuggest} type="text" label="Localização:" onSuggestSelect={this.onSuggestSelect}/>
        <Field name="telephone" component={renderInputText} type="text" label="Telefone:" />
        <Field name="type" component={renderInputSelect} options={storeTypesOptions} label="Tipo:" />
        <Field name="description" component={renderInputText} type="text" label="Descrição:" />

        <button className="button is-primary" type="submit" disabled={submitting}>Enviar</button>
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
