import { findNearestMarkers, findAddress } from '../services/maps';
import _ from 'lodash';

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW';
export const OPEN_INFO_WINDOW = 'OPEN_INFO_WINDOW';
export const REQUEST_SEARCHING = 'REQUEST_SEARCHING';
export const TOGGLE_FILTERS = 'TOGGLE_FILTERS';
export const FILTER_DISTANCE = 'FILTER_DISTANCE';

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

export function search(location, markers, ) {
  let nearestMarkers = findNearestMarkers(location, markers);

  return dispatch => {
    findAddress(location)
      .then(response => {
        let locations = {
          searchedLocation: location,
          searchedAddress: response,
          nearestMarker: {
            _id: nearestMarkers[0] ? nearestMarkers[0]._id : null,
            location: nearestMarkers[0] ? nearestMarkers[0].location : null
          },
          nearestMarkers: nearestMarkers
        }
        dispatch(fetchSearch(locations));
      });
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

export function toggleFilters() {
  return {
    type: TOGGLE_FILTERS
  }
}

export function filterDistance(markers, value) {
  return {
    type: FILTER_DISTANCE,
    payload: {
      selectedValue: value
    }
  }
}
