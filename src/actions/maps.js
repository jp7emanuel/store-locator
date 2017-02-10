import _ from 'lodash';

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW';
export const OPEN_INFO_WINDOW = 'OPEN_INFO_WINDOW';
export const REQUEST_SEARCHING = 'REQUEST_SEARCHING';

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
