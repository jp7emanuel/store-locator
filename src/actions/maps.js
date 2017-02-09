import axios from 'axios';
import _ from 'lodash';

export const FETCH_MARKERS = 'FETCH_MARKERS';
export const FETCH_SEARCH = 'FETCH_SEARCH';
export const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW';
export const OPEN_INFO_WINDOW = 'OPEN_INFO_WINDOW';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_SEARCHING = 'REQUEST_SEARCHING';

const API_URL = 'http://localhost:3000';

export function requestMarkers() {
  return dispatch => {
    dispatch(requestLoading());

    return axios.get(`${API_URL}/stores`)
    .then(function(response) {
      dispatch(fetchMarkers(response.data));
    })
    .catch(function(error){
      dispatch(requestRejected(error));
    });
  };
}

export function closeInfoWindow(marker) {
  return {
    type: CLOSE_INFO_WINDOW,
    payload: marker
  }
}

export function openInfoWindow(marker) {
  return {
    type: OPEN_INFO_WINDOW,
    payload: marker
  }
}

export function search(location, markers) {
  let nearestMarker = findNearestMarker(location, markers);

  return dispatch => {
    dispatch(fetchSearch(nearestMarker.location));
  };
}

export function fetchSearch(response) {
  return {
    type: FETCH_SEARCH,
    payload: response
  };
}

export function fetchMarkers(response) {
  return {
    type: FETCH_MARKERS,
    payload: response
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

export function requestSearching() {
  return {
    type: REQUEST_SEARCHING
  };
}

function findNearestMarker(location, markers) {
  let mapsLocation = getGoogleMapsCoords(location);

  markers.map(marker => {
    return marker.distance = parseFloat((window.google.maps.geometry.spherical.computeDistanceBetween(mapsLocation, getGoogleMapsCoords(marker.location)) / 1000).toFixed(2));
  });

  return _(markers).sortBy('distance').value()[0];
}

function getGoogleMapsCoords(location) {
  return new window.google.maps.LatLng(location.lat, location.lng);
}
