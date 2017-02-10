import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import renderInputText from '../inputs/text';
import renderInputSelect from '../inputs/select';
import renderInputGeosuggest from '../inputs/geosuggest';
import { requestStoreTypes } from '../../actions/store-types';
import Spinner from '../loadings/spinner';

const validate = values => {
  const errors = {}
  const requiredFields = ['name', 'place', 'telephone', 'type', 'description'];

  _.each(requiredFields, field => {
    if (!values[field]) {
      errors[field] = 'Este campo é obrigatório';
    }
  });

  if (!values.address) {
    errors.place = 'Você deve selecionar uma das opções do autopreenchimento';
  }

  return errors;
}

class StoresForm extends Component {

  componentWillMount() {
    this.props.requestStoreTypes();
  }

  onSuggestSelect = (suggest) => {
    this.props.change('location', suggest.location);
    this.props.change('address', suggest.gmaps.formatted_address);
  }

  onSuggestNoResults = () => {
    this.props.change('location', "");
    this.props.change('address', "");
  }

  formReset = () => {
    this.props.change('location', this.props.initialValues.location);
    this.props.reset();
  }

  render () {
    const { types, handleSubmit, submitting, initialValues, pristine } = this.props;

    if (types.length < 1) {
      return <Spinner />;
    }

    const storeTypesOptions = types.map(type => {
      return {
        value: type._id,
        label: type.name,
      };
    });

    return (
      <form className="is-horizontal" onSubmit={handleSubmit}>
        <Field name="location.lat" component="input" type="hidden" value={!initialValues ? "" : !initialValues.location ? "" : initialValues.location.lat}/>
        <Field name="location.lng" component="input" type="hidden" value={!initialValues ? "" : !initialValues.location ? "" : initialValues.location.lng}/>
        <Field name="address" component="input" type="hidden"/>

        <Field name="name" component={renderInputText} type="text" label="Nome da Loja:" />
        <Field name="place" component={renderInputGeosuggest} type="text" label="Localização:" onSuggestSelect={this.onSuggestSelect} onSuggestNoResults={this.onSuggestNoResults}/>
        <Field name="telephone" component={renderInputText} type="text" label="Telefone:" />
        <Field name="type" component={renderInputSelect} options={storeTypesOptions} label="Tipo:" />
        <Field name="description" component={renderInputText} type="text" label="Descrição:" />

        <button className="button is-primary" type="submit" disabled={submitting}>Enviar</button>
        <button className="button is-link" type="button" disabled={pristine || submitting} onClick={this.formReset}>Reiniciar</button>
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
