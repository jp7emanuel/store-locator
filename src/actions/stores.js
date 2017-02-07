import axios from 'axios';
import _ from 'lodash';

const API_URL = 'http://localhost:3000';

export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const FETCH_STORES = 'FETCH_STORES';
export const CREATE_STORE = 'CREATE_STORE';
export const FETCH_SEARCH_STORE = 'FETCH_SEARCH_STORE';

export function requestStores() {
  return function(dispatch) {
    dispatch(requestLoading());

    return axios.get(`${API_URL}/stores`)
    .then(function(response) {
      dispatch(fetchStores(response));
    })
    .catch(function(error){
      dispatch(requestRejected(error));
    })
  };
}

export function saveStore(store) {
  let location = {
      lat: store.lat,
      lng: store.lng
  }
  let persistedStore = _.omit(store, ['lat', 'lng']);
  persistedStore.location = location;

  return function(dispatch) {
    return axios.post(`${API_URL}/stores`, { data: persistedStore })
    .then(function(response) {
      dispatch(saveStore(response));
    })
    .catch(function(error){
      dispatch(requestRejected(error));
    })
  };
}

export function requestRejected(response) {
  return {
    type: REQUEST_REJECTED,
    payload: response
  };
}

export function requestLoading() {
  return {
    type: REQUEST_LOADING
  };
}

export function fetchStores(response) {
  return {
    type: FETCH_STORES,
    payload: response
  };
}

export function createStore(response) {
  return {
    type: CREATE_STORE,
    payload: response
  }
}