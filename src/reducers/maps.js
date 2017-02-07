import { FETCH_MARKERS } from '../actions/maps';

const INITIAL_STATE = {
  markers: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MARKERS:
      return {
        ...state,
        markers: action.payload
      };
    default:
      return state;
  }
}

