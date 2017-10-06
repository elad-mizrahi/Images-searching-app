import * as types from '../actions/actionTypes';

export default function historyReducer(state = [], action) {
  switch (action.type) {
    case types.UPDATE_QUERY:
      return [
        ...state,
        Object.assign({}, action)
      ];

    case types.CLEAR_LIST:
    return [];

    default:
      return state;
  }
}
