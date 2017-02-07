import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import StoresIndex from '../components/stores';
import StoresCreate from '../components/stores/create';
import ErrorMessage from '../components/errors';

const Routes = () => (
  <div>
    <Match exactly pattern="/" component={StoresIndex} />
    <Match exactly pattern="/create" component={StoresCreate} />

    <Miss render={ErrorMessage} />
  </div>
);

export default Routes;
