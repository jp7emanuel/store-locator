import { findNearestsMarkers, findNearestMarker } from '../services/maps';

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW';
export const OPEN_INFO_WINDOW = 'OPEN_INFO_WINDOW';
export const REQUEST_SEARCHING = 'REQUEST_SEARCHING';
export const FETCH_NEARESTSMARKERS = 'FETCH_NEARESTSMARKERS';

export function closeInfoWindow(markerId) {
  return {
    type: CLOSE_INFO_WINDOW,
    payload: markerId
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
  let locations = {
    searchedLocation: location,
    nearestMarker: nearestMarker
  }
  return dispatch => {
    dispatch(fetchSearch(locations));
  };
}

export function fetchSearch(response) {
  return {
    type: FETCH_SEARCH,
    payload: response
  };
}

export function requestSearching() {
  return {
    type: REQUEST_SEARCHING
  };
}

export function fetchNearestsMarkers(location, markers) {
  let nearestsMarkers = findNearestsMarkers(location, markers, 50);
  return {
    type: FETCH_NEARESTSMARKERS,
    payload: nearestsMarkers
  }
}
