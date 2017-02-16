import _ from 'lodash';
import axios from 'axios';

export function findAddress(location) {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}`)
    .then(response => {
      return response.data.results[0].formatted_address;
    });
}

export function findNearestMarkers(location, markers, maxDistance = 0) {
  let mapsLocation = getGoogleMapsCoords(location);

  markers.map(marker => {
    return marker.distance = getDistanceInKm(mapsLocation, getGoogleMapsCoords(marker.location));
  });

  let cursorMarker = _(markers).sortBy('distance');

  cursorMarker = filterMarkersByDistance(cursorMarker, maxDistance);

  return cursorMarker.value();
}

export function filterMarkersByDistance(markers, maxDistance) {
  if (maxDistance > 0) {
    return markers.filter(marker => marker.distance <= maxDistance);
  }

  return markers;
}

function getGoogleMapsCoords(location) {
  return new window.google.maps.LatLng(location.lat, location.lng);
}

function getDistanceInKm(oneGoogleLocation, anotherGoogleLocation) {
  return parseFloat((window.google.maps.geometry.spherical.computeDistanceBetween(oneGoogleLocation, anotherGoogleLocation) / 1000).toFixed(2))
}
