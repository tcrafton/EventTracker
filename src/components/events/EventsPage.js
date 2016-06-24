import React, { Component } from 'react';
import EventList from './EventList';
import EventDetail from './EventDetail';

class EventsPage extends Component {
  render() {
    return (
      <div>
        <h1>List Events</h1>
        <EventList />
        <EventDetail />
      </div>
    );
  }
}

export default EventsPage;
