import * as types from '../actions/actionTypes';

export default function imageReducer(state = [{data:[], query: ''}], action) {
  switch (action.type) {
    case types.RECEIVE_DATA:
      return [{
        data: action.data,
        query: action.query
      }];

    default:
      return state;
  }
}
