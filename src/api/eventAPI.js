import axios from 'axios';

class EventAPI {

  static getAllEvents() {
    return axios.get("https://api.mongolab.com/api/1/databases/eventtrackdb/collections/events/?apiKey=kpzP7i0xo98J-y3lFflSyNiFt5fcKJkL")
      .then(response => {
        return response.data;
      });
  }

}

export default EventAPI;
