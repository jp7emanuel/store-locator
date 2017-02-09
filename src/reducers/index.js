import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import StoresReducer from './stores';
import StoreTypesReducer from './store-types';
import MapsReducer from './maps';
import { reducer as SweetAlertReducer } from 'react-redux-sweetalert';

const rootReducer = combineReducers({
  form: formReducer,
  stores: StoresReducer,
  storeTypes: StoreTypesReducer,
  maps: MapsReducer,
  sweetalert: SweetAlertReducer
});

export default rootReducer;
