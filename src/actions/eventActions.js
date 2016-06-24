import * as types from './actionTypes';
import courseApi from '../api/mockEventApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadEventsSuccess(events){
  return { type: types.LOAD_EVENTS_SUCCESS, events};
}

export function loadEvents(){
    return function(dispatch){
      dispatch(beginAjaxCall());
      return courseApi.getAllEvents().then(events => {
        dispatch(loadEventsSuccess(events));
      }).catch(error => {
        throw(error);
      });
    };
}

export function selectEvent(event) {
  return {
    type: types.EVENT_SELECTED,
    payload: event
  };
}
