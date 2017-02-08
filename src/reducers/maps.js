import { REQUEST_REJECTED, REQUEST_LOADING, FETCH_MARKERS, FETCH_SEARCH, CLOSE_INFO_WINDOW, OPEN_INFO_WINDOW, REQUEST_SEARCHING } from '../actions/maps';

const INITIAL_STATE = {
  markers: [],
  searching: false,
  location: null,
  fetching: false,
  fetched: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case REQUEST_SEARCHING:
      return {
        ...state,
        searching: true
      };
    case REQUEST_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload.data
      };
    case FETCH_MARKERS:
      return {
        ...state,
        markers: action.payload,
        fetching: false,
        fetched: true
      }
    case FETCH_SEARCH:
      return {
        ...state,
        location: action.payload,
        searching: false
      }
    case CLOSE_INFO_WINDOW: {
      let newMarkers = updateMarkerShowInfo(state.markers, action.payload, false);

      return {
        ...state,
        markers: newMarkers
      }
    }
    case OPEN_INFO_WINDOW: {
      let newMarkers = updateMarkerShowInfo(state.markers, action.payload);

      return {
        ...state,
        markers: newMarkers
      }
    }
    default:
      return state;
  }
}

function updateMarkerShowInfo(markers, markerId, markerShowInfo = true) {
  return markers.map(item => {
    if (item._id !== markerId) {
      return item;
    }

    return {
      ...item,
      showInfo: markerShowInfo
    };
  });
}
