// Set up your root reducer here...
import { combineReducers } from 'redux';
import EventsReducer from './eventReducer';
import SelectedEvent from './selectedEventReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  events: EventsReducer,
  selectedEvent: SelectedEvent,
  ajaxCallsInProgress,
  form: formReducer
});

export default rootReducer;
