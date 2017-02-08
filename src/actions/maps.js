import axios from 'axios';
import _ from 'lodash';

export const FETCH_MARKERS = 'FETCH_MARKERS';
export const FETCH_ZOOM = 'FETCH_ZOOM';

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

export function zoomMap(location) {
  return function(dispatch) {
    dispatch(fetchZoom(location));
  };
}

export function fetchZoom(response) {
  return {
    type: FETCH_ZOOM,
    payload: response
  };
}

export function fetchMarkers(response) {
  return {
    type: FETCH_MARKERS,
    payload: response
  };
}
