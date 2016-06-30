import mongoose from 'mongoose';

let eventSchema = {
  eventName: String,
  description: String
};

let EventItem = mongoose.model('Event', eventSchema);

export default EventItem;
