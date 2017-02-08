import { FETCH_MARKERS, FETCH_ZOOM } from '../actions/maps';

const INITIAL_STATE = {
  markers: [],
  zoomAt: null,
  located: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MARKERS:
      return {
        ...state,
        markers: action.payload
      }
    case FETCH_ZOOM:
      return {
        ...state,
        zoomAt: action.payload,
        located: true
      }
    default:
      return state;
  }
}

