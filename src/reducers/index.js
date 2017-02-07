import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import StoresReducer from './stores';
import StoreTypesReducer from './store-types';
import MapsReducer from './maps';

const rootReducer = combineReducers({
  form: formReducer,
  stores: StoresReducer,
  storeTypes: StoreTypesReducer,
  maps: MapsReducer
});

export default rootReducer;
