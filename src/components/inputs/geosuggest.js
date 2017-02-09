import React from 'react';
import _ from 'lodash';
import Geosuggest from 'react-geosuggest';

const renderInputGeosuggest = ({ input, label, onSuggestSelect, meta: { touched, error } }) => (
  <div className="control" key={input.name}>
    <label className="label">{label ? label : _.capitalize(input.name)}</label>
    <div>
      <Geosuggest {...input} onSuggestSelect={onSuggestSelect} />
      {touched && error && <span className="help is-danger">{error}</span>}
    </div>
  </div>
);

export default renderInputGeosuggest;
