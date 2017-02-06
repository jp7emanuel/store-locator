import { combineReducers } from 'redux';
import StoresReducer from './stores';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  stores: StoresReducer,
  form: formReducer
});

export default rootReducer;
