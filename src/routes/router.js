import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import StoresIndex from '../components/stores';
import StoresCreate from '../components/stores/create';
import StoresList from '../components/stores/list';
import StoresEdit from '../components/stores/edit';
import ErrorMessage from '../components/errors';

const Routes = () => (
  <div>
    <Match exactly pattern="/" component={StoresIndex} />
    <Match exactly pattern="/stores" component={StoresList} />
    <Match exactly pattern="/stores/create" component={StoresCreate} />
    <Match exactly pattern="/stores/edit/:id" component={StoresEdit} />

    <Miss render={ErrorMessage} />
  </div>
);

export default Routes;
