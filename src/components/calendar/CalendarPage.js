import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../../actions/eventActions';
import { bindActionCreators } from 'redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
//import events from './events';
import '../../styles/react-big-calendar.css';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class CalendarPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadEvents();
  }

  renderEvents() {
    return this.props.events.map((event) => {
      const dateVal = new Date(event.eventDate);
      return (
        {
          'title': event.eventName,
          'start': moment(dateVal).format('YYYY, MM, D'),
          'end': moment(dateVal).format('YYYY, MM, D')
        }
      );
    });
  }

  render(){
    const calendarStyle = {
      width: 1200,
      height: 800,
      padding: 15,
      margin: 30,
      backgroundColor: 'white',
      border: '1px solid black'
    };

    return (
      <div style={calendarStyle}>
        <BigCalendar
          {...this.props}
          events={this.renderEvents()}
          defaultDate={new Date(2016, 6, 1)}
          />
      </div>
    );
  }
}

CalendarPage.propTypes = {
  events: PropTypes.array.isRequired,
  loadEvents: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
