import React from 'react';
import _ from 'lodash';
import Geosuggest from 'react-geosuggest';

const renderInputGeosuggest = ({ input, label, onSuggestSelect, onSuggestNoResults, meta: { touched, error } }) => (
  <div className="control" key={input.name}>
    <label className="label">{label ? label : _.capitalize(input.name)}</label>
    <div>
      <Geosuggest {...input}
        onSuggestSelect={onSuggestSelect}
        onSuggestNoResults={onSuggestNoResults}
        initialValue={input.value ? input.value : ""}
        placeholder="Digite um endereço ou local..."
      />
      {touched && error && <span className="help is-danger">{error}</span>}
    </div>
  </div>
);

export default renderInputGeosuggest;
