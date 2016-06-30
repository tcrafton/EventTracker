//import database from '../../tools/database';
//import EventItem from '../../tools/models/EventItem';
import axios from 'axios';

class EventAPI {

  static getAllEvents() {
    return axios.get("https://api.mongolab.com/api/1/databases/eventtrackdb/collections/events/?apiKey=kpzP7i0xo98J-y3lFflSyNiFt5fcKJkL")
      .then(response => {
        return response.data;
      });
  }

  static addNewEvent(){
    return axios.post("https://api.mongolab.com/api/1/databases/eventtrackdb/collections/events/?apiKey=kpzP7i0xo98J-y3lFflSyNiFt5fcKJkL", {
      id: 7,
      eventName: 'Another Test Event',
      eventDate: '7/20/16',
      lat: 38.627003,
      lon: -90.199402,
      address: {
        number: '700',
        street: 'Clark Ave.',
        city: 'St. Louis',
        state: 'MO',
        zipcode: '63102'
      },
      description: 'Well, did it work??',
      owner: 'TWC'
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('Error:' + error);
    });

  }


}

export default EventAPI;
