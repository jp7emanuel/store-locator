import axios from 'axios';
import _ from 'lodash';

const API_URL = 'http://localhost:8080/api';

export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const FETCH_STORES = 'FETCH_STORES';
export const CREATE_STORE = 'CREATE_STORE';
export const FETCH_SEARCH_STORE = 'FETCH_SEARCH_STORE';
export const REMOVE_STORE = 'REMOVE_STORE';
export const FETCH_STORE = 'FETCH_STORE';
export const UPDATE_STORE = 'UPDATE_STORE';

export function requestStores() {
  return dispatch => {
    dispatch(requestLoading());

    return axios.get(`${API_URL}/stores`)
    .then(function(response) {
      dispatch(fetchStores(response.data));
    })
    .catch(function(error){
      dispatch(requestRejected(error));
    });
  };
}

export function requestStore(storeId) {
  return dispatch => {
    dispatch(requestLoading());

    return axios.get(`${API_URL}/stores/${storeId}`)
    .then(function(response) {
      dispatch(fetchStore(response.data));
    })
    .catch(function(error){
      dispatch(requestRejected(error));
    });
  };
}

export function saveStore(store) {
  return function(dispatch) {
    return axios.post(`${API_URL}/stores`, { data: store })
    .then(function(response) {
      dispatch(createStore(response));
    })
    .catch(function(error){
      dispatch(requestRejected(error));
    })
  };
}

export function editStore(store) {
  return function(dispatch) {
    return axios.put(`${API_URL}/stores/${store._id}`, { data: store })
    .then(function(response) {
      dispatch(updateStore(response));
    })
    .catch(function(error){
      dispatch(requestRejected(error));
    })
  };
}


export function deleteStore(id) {
  return function(dispatch) {
    return axios.delete(`${API_URL}/stores/${id}`)
    .then(function(response) {
      dispatch(removeStore(id));
    })
    .catch(function(error){
      dispatch(requestRejected(error));
    })
  };
}

export function requestLoading() {
  return {
    type: REQUEST_LOADING
  };
}

export function requestRejected(response) {
  return {
    type: REQUEST_REJECTED,
    payload: response
  };
}

export function fetchStores(response) {
  return {
    type: FETCH_STORES,
    payload: response
  };
}

export function fetchStore(response) {
  return {
    type: FETCH_STORE,
    payload: response
  };
}

export function createStore(response) {
  return {
    type: CREATE_STORE,
    payload: response
  }
}

export function updateStore(response) {
  return {
    type: UPDATE_STORE,
    payload: response
  }
}

export function removeStore(id) {
  return {
    type: REMOVE_STORE,
    payload: id
  }
}
