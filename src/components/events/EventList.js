import React, { PropTypes } from 'react';
import EventListRow from './EventListRow';

const EventList = ({events}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Event Name</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event =>
          <EventListRow key={event.id} event={event} />
        )}
      </tbody>
    </table>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;
