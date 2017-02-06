import { FETCH_HAS_ERRORED, FETCH_STORES } from '../actions/index';
import { update } from 'react-addons-update';
const INITIAL_STATE = {
  all: [],
  store: null,
  isLoading: true,
  error: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HAS_ERRORED:
    return update(state, {
        $merge: {
          isLoading: false,
          error: true
        }
      });
    case FETCH_STORES:
      return update(state, {
        $merge: {
          all: action.payload.data,
          isLoading: false,
          error: false
        }
      });
    default:
      return state;
  }
}
