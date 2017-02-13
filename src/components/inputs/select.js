import React from 'react';
import _ from 'lodash';

const renderInputSelect = ({ input, label, type, options, meta: { touched, error } }) => (
  <div className="control" key={input.name}>
    <label className="label">{label ? label : _.capitalize(input.name)}</label>
    <p>
      <span className="select">
        <select {...input} className={ touched && error ? "input is-danger" : "input" }>
          <option value="">Selecione um Tipo</option>
          {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </span>
      {touched && error && <span className="help is-danger">{error}</span>}
    </p>
  </div>
);

export default renderInputSelect;
