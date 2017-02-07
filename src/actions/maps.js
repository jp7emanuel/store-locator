import axios from 'axios';
import _ from 'lodash';

export const FETCH_MARKERS = 'FETCH_MARKERS';

const API_URL = 'http://localhost:3000';

export function requestMarkers() {
  return function(dispatch) {
    return axios.get(`${API_URL}/stores`)
    .then(function(response) {
      let locations = response.data.map(item => item.location);
      dispatch(fetchMarkers(locations));
    });
  };
}

export function fetchMarkers(response) {
  return {
    type: FETCH_MARKERS,
    payload: response
  };
}
