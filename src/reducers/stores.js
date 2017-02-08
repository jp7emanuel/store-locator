import { REQUEST_REJECTED, CREATE_STORE } from '../actions/stores';

const INITIAL_STATE = {
  all: [],
  store: null,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_REJECTED:
      return {
        ...state,
        error: action.payload.data
      };
    case CREATE_STORE:
      return {
        ...state,
        store: action.payload.data
      };
    default:
      return state;
  }
}
