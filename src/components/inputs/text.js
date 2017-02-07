import React from 'react';
import _ from 'lodash';

const renderInputText = ({ input, label, type, expanded, meta: { touched, error } }) => (
  <div className={ expanded ? "control is-expanded" : "control" }>
    <label className="label">{label ? label : _.capitalize(input.name)}</label>
    <p>
      <input {...input} className={ touched && error ? "input is-danger" : "input" } type={type} />
      {touched && error && <span className="help is-danger">{error}</span>}
    </p>
  </div>
);

export default renderInputText;
