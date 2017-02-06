import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const FETCH_HAS_ERRORED = 'FETCH_HAS_ERRORED';
export const FETCH_IS_LOADING = 'FETCH_IS_LOADING';
export const FETCH_STORES = 'FETCH_STORES';

export function requestStores() {
  return function(dispatch) {
    dispatch(fetchIsLoading());

    return axios.get(`${API_URL}/stores`)
    .then(function(response) {
      dispatch(fetchStores(response));
    })
    .catch(function(response){
      dispatch(fetchHasErrored());
    })
  };
}

export function fetchHasErrored() {
  return {
    type: FETCH_HAS_ERRORED
  };
}

export function fetchIsLoading() {
  return {
    type: FETCH_IS_LOADING
  };
}

export function fetchStores(response) {
  return {
    type: FETCH_STORES,
    payload: response
  };
}
