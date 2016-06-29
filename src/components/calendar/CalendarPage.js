import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import '../../styles/react-big-calendar.css';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class Basic extends Component {
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
          events={events}
          defaultDate={new Date(2015, 3, 1)}
          />
      </div>
    );
  }
}

export default Basic;
