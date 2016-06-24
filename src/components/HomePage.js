import React from 'react';
import GoogleMap from './GoogleMap';

const HomePage = () => {
  return (
    <div>
      <h1>Event Tracker!</h1>
      <div id="test">
        test
        <GoogleMap lon={138.933334} lat={34.966671} />
      </div>
      <h2>stuff</h2>
    </div>
  );
};

export default HomePage;
