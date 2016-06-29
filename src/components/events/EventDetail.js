import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class EventDetail extends Component {
  constructor() {
    super();
  }

  componentDidUpdate() {
    const SELECTED_LAT_LON = {
      lat: this.props.event.lat,
      lng: this.props.event.lon
    };

    this.map = new google.maps.Map(this.refs.map, {
      center: SELECTED_LAT_LON,
      zoom: 12
    });

  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };

    const { fields: { eventName, eventDate, description }} = this.props;
    if (!this.props.event) {
      return <div>Select an Event</div>;
    }

    return (
      <div>
      <form className="form-horizontal">
        <div className="well well-sm">
          <div className="row">
            <div className="col-md-6">
              <legend>Event Info</legend>

              <div className="form-group">
                <label htmlFor="inputEventName" className="col-md-3 control-label">Event Name</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputEventName" {...eventName} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inputEventDate" className="col-md-3 control-label">Date</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputEventName" {...eventDate} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inputDescription" className="col-md-3 control-label">Description</label>
                <div className="col-md-6">
                  <textarea className="form-control" id="inputDescription" rows="4" {...description} />
                </div>
              </div>

            </div>

            <div className="col-md-3">
              <div ref="map" style={mapStyle}>I should be a map!</div>
            </div>

          </div>
        </div>
      </form>
      </div>
    );
  }
}

EventDetail.propTypes = {
  fields: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    event: state.selectedEvent,
    initialValues: state.selectedEvent
  };
}

export default reduxForm({
  form: 'EventDetailForm',
  fields: ['eventName', 'eventDate', 'description' ]
}, mapStateToProps)(EventDetail);
