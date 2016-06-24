import * as types from '../actions/actionTypes';

export default function(state = null, action){
  switch (action.type) {
    case types.EVENT_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
