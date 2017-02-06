import React, { Component, PropTypes } from 'react';

class ErrorMessage extends Component {
  render() {
    return <p className="container column">{this.props.message ? this.props.message : 'Houve um problema ao retornar a lista de dados!'}</p>;
  }
}

export default ErrorMessage;
