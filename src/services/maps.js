import _ from 'lodash';

export function findNearestsMarkers(location, markers, maxDistance = null) {
  let mapsLocation = getGoogleMapsCoords(location);

  markers.map(marker => {
    return marker.distance = getDistanceInKm(mapsLocation, getGoogleMapsCoords(marker.location));
  });

  let cursorMarker = _(markers).sortBy('distance');

  if (maxDistance) {
    cursorMarker = cursorMarker.filter(marker => marker.distance <= maxDistance);
  }

  return cursorMarker.value();
}

export function findNearestMarker(location, markers) {
  return findNearestsMarkers(location, markers)[0];
}

function getGoogleMapsCoords(location) {
  return new window.google.maps.LatLng(location.lat, location.lng);
}

function getDistanceInKm(oneGoogleLocation, anotherGoogleLocation) {
  return parseFloat((window.google.maps.geometry.spherical.computeDistanceBetween(oneGoogleLocation, anotherGoogleLocation) / 1000).toFixed(2))
}
