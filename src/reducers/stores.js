import { REQUEST_REJECTED, REQUEST_LOADING, CREATE_STORE, FETCH_STORES, FETCH_STORE, UPDATE_STORE, REMOVE_STORE } from '../actions/stores';

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
        all: action.payload,
        fetching: false,
        fetched: true
      }
    case FETCH_STORE:
      return {
        ...state,
        store: action.payload,
        fetching: false,
        fetched: true
      }
    case UPDATE_STORE:
    case CREATE_STORE:
      return {
        ...state,
        store: action.payload.data
      };
    case REMOVE_STORE:
      return {
        ...state,
        all: state.all.filter(store => store._id !== action.payload)
      }
    default:
      return state;
  }
}
