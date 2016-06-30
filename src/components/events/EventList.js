import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectEvent, loadEvents, testGetData } from '../../actions/eventActions';
import { bindActionCreators } from 'redux';

class EventList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadEvents();
  }

  renderList() {
    return this.props.events.map((event) => {
      const location = event.address.number + ' ' + event.address.street + ', ' + event.address.city + ' ' + event.address.state + '.';
      return (
          <tr
            key={event.id}
            onClick={() => this.props.selectEvent(event)}>
            <td>{event.eventName}</td>
            <td>{event.eventDate}</td>
            <td>{location}</td>
            <td>{event.description}</td>
            <td>{event.owner}</td>
          </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  loadEvents: PropTypes.func.isRequired,
  selectEvent: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectEvent, loadEvents, testGetData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
