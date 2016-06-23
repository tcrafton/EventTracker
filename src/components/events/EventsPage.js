import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../../actions/eventActions';
import EventList from './EventList';

class EventsPage extends Component {

  eventRow(event, index) {
    return <div key={index}>{event.eventName}</div>;
  }

  render() {
    const { events } = this.props;

    return (
      <div>
        <h1>List Events</h1>
        <EventList events={events} />
      </div>
    );
  }
}

EventsPage.propTypes = {
  events: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
