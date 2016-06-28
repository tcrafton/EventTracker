import React from 'react';

const ARC_DE_TRIOMPHE_POSITION = {
  lat: 34.966671,
  lng: 138.933334
};

const WHO_KNOWS = {
  lat: -34.397,
  lng: 150.644
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

class MapTest extends React.Component {
  constructor() {
    super();
    this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
    this.panToWhoKnows = this.panToWhoKnows.bind(this);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: EIFFEL_TOWER_POSITION,
      zoom: 16
    });
  }

  panToArcDeTriomphe() {
    //this.map.panTo(ARC_DE_TRIOMPHE_POSITION);

    this.map = new google.maps.Map(this.refs.map, {
      center: ARC_DE_TRIOMPHE_POSITION,
      zoom: 12
    });
  }

  panToWhoKnows() {
    this.map = new google.maps.Map(this.refs.map, {
      center: WHO_KNOWS,
      zoom: 12
    });
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };

    return (
      <div>
        <button onClick={this.panToArcDeTriomphe}>Go to Arc De Triomphe</button>
        <button onClick={this.panToWhoKnows}>Go to Who Knows</button>
        <div ref="map" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}

export default MapTest;
