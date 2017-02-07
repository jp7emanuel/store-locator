import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import StoresReducer from './stores';
import StoreTypesReducer from './store-types';

const rootReducer = combineReducers({
  form: formReducer,
  stores: StoresReducer,
  storeTypes: StoreTypesReducer
});

export default rootReducer;
