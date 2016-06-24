import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class EventDetail extends Component {
  render() {

    const { fields: { eventName, eventDate, description }} = this.props;
    if (!this.props.event) {
      return <div>Select an Event</div>;
    }

    return (
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
                  <input type="text" className="form-control" id="inputDescription" {...description} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </form>
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
