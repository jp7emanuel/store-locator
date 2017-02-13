import { REQUEST_SEARCHING, FETCH_SEARCH, CLOSE_INFO_WINDOW, OPEN_INFO_WINDOW, FETCH_NEARESTSMARKERS } from '../actions/maps';

const INITIAL_STATE = {
  searching: false,
  location: null,
  searchedLocation: null,
  openedMarker: null,
  nearestsMarkers: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SEARCHING:
      return {
        ...state,
        searching: true
      };
    case FETCH_SEARCH:
      return {
        ...state,
        openedMarker: action.payload.nearestMarker._id,
        location: action.payload.nearestMarker.location,
        searchedLocation: action.payload.searchedLocation,
        searching: false
      }
    case CLOSE_INFO_WINDOW: {
      return {
        ...state,
        openedMarker: null
      }
    }
    case OPEN_INFO_WINDOW: {
      return {
        ...state,
        openedMarker: action.payload._id,
        location: action.payload.location
      }
    }
    case FETCH_NEARESTSMARKERS: {
      return {
        ...state,
        nearestsMarkers: action.payload
      }
    }
    default:
      return state;
  }
}
