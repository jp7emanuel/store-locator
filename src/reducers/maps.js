import {
  REQUEST_SEARCHING,
  FETCH_SEARCH,
  CLOSE_INFO_WINDOW,
  OPEN_INFO_WINDOW,
  TOGGLE_FILTERS,
  FILTER_DISTANCE
} from '../actions/maps';

const INITIAL_STATE = {
  searching: false,
  location: null,
  searchedLocation: null,
  searchedAddress: null,
  openedMarker: null,
  nearestMarkers: [],
  filters: {
    distance: 0
  },
  displayFilters: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SEARCHING: {
      return {
        ...state,
        searching: true,
        searchedAddress: INITIAL_STATE.searchedAddress
      };
    }
    case FETCH_SEARCH: {
      return {
        ...state,
        openedMarker: action.payload.nearestMarker._id,
        location: action.payload.nearestMarker.location,
        searchedLocation: action.payload.searchedLocation,
        searchedAddress: action.payload.searchedAddress,
        nearestMarkers: action.payload.nearestMarkers,
        searching: INITIAL_STATE.searching
      }
    }
    case CLOSE_INFO_WINDOW: {
      return {
        ...state,
        openedMarker: INITIAL_STATE.openedMarker
      }
    }
    case OPEN_INFO_WINDOW: {
      return {
        ...state,
        openedMarker: action.payload._id,
        location: action.payload.location
      }
    }
    case TOGGLE_FILTERS: {
      return {
        ...state,
        displayFilters: !state.displayFilters
      }
    }
    case FILTER_DISTANCE: {
      return {
        ...state,
        filters: {
          ...state.filters,
          distance: action.payload.selectedValue
        }
      }
    }
    default:
      return state;
  }
}
