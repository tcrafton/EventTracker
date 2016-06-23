import React, { PropTypes } from 'react';

const EventListRow = ({event}) => {
  return (
    <tr>
      <td>{event.eventName}</td>
    </tr>
  );
};

EventListRow.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventListRow;
