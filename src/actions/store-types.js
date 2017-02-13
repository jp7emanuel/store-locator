import axios from 'axios';

export const FETCH_STORETYPES = 'FETCH_STORETYPES';

const API_URL = '/api';

export function requestStoreTypes() {
  return function(dispatch) {
    return axios.get(`${API_URL}/store-types`)
    .then(function(response) {
      dispatch(fetchStoreTypes(response));
    });
  };
}

export function fetchStoreTypes(response) {
  return {
    type: FETCH_STORETYPES,
    payload: response
  };
}
