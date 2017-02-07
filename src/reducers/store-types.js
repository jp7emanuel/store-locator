import { FETCH_STORETYPES } from '../actions/store-types';

const INITIAL_STATE = {
  all: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_STORETYPES:
      return {
        ...state,
        all: action.payload.data
      };
    default:
      return state;
  }
}

