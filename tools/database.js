import mongoose from 'mongoose';
import EventItem from './models/EventItem';

mongoose.connect('mongodb://EventAdmin:testpass@ds023664.mlab.com:23664/eventtrackdb', function() {
  console.log('connected');

  EventItem.find({}, function(err, events) {
    if (err) throw err;
    
  });

});
