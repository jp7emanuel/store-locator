import { REQUEST_REJECTED, FETCH_STORES, REQUEST_LOADING, CREATE_STORE } from '../actions/stores';

const INITIAL_STATE = {
  all: [],
  store: null,
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
    case REQUEST_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload.data
      };
    case FETCH_STORES:
      return {
        ...state,
        all: action.payload.data,
        fetching: false,
        fetched: true,
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
