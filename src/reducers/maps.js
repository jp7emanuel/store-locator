import { REQUEST_SEARCHING, FETCH_SEARCH, CLOSE_INFO_WINDOW, OPEN_INFO_WINDOW } from '../actions/maps';

const INITIAL_STATE = {
  searching: false,
  location: null,
  openedMarkers: []
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
        location: action.payload,
        searching: false
      }
    case CLOSE_INFO_WINDOW: {
      return {
        ...state,
        openedMarkers: state.openedMarkers.filter(markerId => markerId !== action.payload)
      }
    }
    case OPEN_INFO_WINDOW: {
      return {
        ...state,
        openedMarkers: state.openedMarkers.concat(action.payload._id),
        location: action.payload.location
      }
    }
    default:
      return state;
  }
}
