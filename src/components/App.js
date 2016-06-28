import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/events-list">Events</Link>
      {' | '}
      <Link to="/calendar">Calendar</Link>
      {' | '}
      <Link to="/overview">Overview</Link>
      {' | '}
      <Link to="/map-test">MapTest</Link>
      {' | '}
      <Link to="/login">Login</Link>
      <br />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
