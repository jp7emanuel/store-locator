import React from 'react';
import BrowserRouter from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import App from '../components/app';
import StoresIndex from '../components/stores';
import ErrorMessage from '../components/errors';

const Routes = () => (
  <div>
    <Match exactly pattern="/" component={StoresIndex} />

    <Miss render={ErrorMessage} />
  </div>
);

export default Routes;
