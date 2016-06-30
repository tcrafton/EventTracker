import * as types from './actionTypes';
//import eventApi from '../api/mockEventApi';
import eventApi from '../api/eventAPI';
import { beginAjaxCall } from './ajaxStatusActions';
import axios from 'axios';


export function loadEventsSuccess(events){
  return { type: types.LOAD_EVENTS_SUCCESS, events};
}

export function loadEvents(){
    return function(dispatch) {
      dispatch(beginAjaxCall());
      return eventApi.getAllEvents().then(events => {
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

export function addEvent() {
    return eventApi.addNewEvent().then(event => {
      console.log('event added');
    }).catch(error => {
      throw(error);
    });
}

export function testGetData(){
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios.get("https://api.mongolab.com/api/1/databases/eventtrackdb/collections/events/?apiKey=kpzP7i0xo98J-y3lFflSyNiFt5fcKJkL")
      .then(response => {
        console.log(response.data);
      });
  };
}
