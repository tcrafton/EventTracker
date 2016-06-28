const events = [
  {
    id: 0,
    eventName: 'Cards Game',
    eventDate: '9/1/16',
    lat: -34.397,
    lon: 150.644,
    address: {
      number: '700',
      street: 'Clark Ave.',
      city: 'St. Louis',
      state: 'MO',
      zipcode: '63102'
    },
    description: 'Go to Cardinals baseball game with Bob and Shawn',
    owner: 'Tommy'
  },
  {
    id: 2,
    eventName: 'Convention',
    eventDate: '8/1/16',
    lat: 34.966671,
    lon: 138.933334,
    address: {
      number: '3',
      street: 'Branson Landing Blvd.',
      city: 'Branson',
      state: 'MO',
      zipcode: '65616'
    },
    description: 'Teachers convention to learn awesome stuff',
    owner: 'Tara'
  },
  {
    id: 3,
    eventName: 'Girls State',
    eventDate: '6/26/16',
    lat: 35.7796,
    lon: 78.63882,
    address: {
      number: '108',
      street: 'W South St.',
      city: 'Warrensburg',
      state: 'MO',
      zipcode: '64093'
    },
    description: 'Girls State Convention',
    owner: 'Kaylee'
  },
  {
    id: 4,
    eventName: 'Paintball',
    eventDate: '8/25/16',
    lat: 39.7392,
    lon: 104.9903,
    address: {
      number: '3925',
      street: 'State Highway H',
      city: 'Blodgett',
      state: 'MO',
      zipcode: '63824'
    },
    description: 'Paintball competition with Tristan and Chris',
    owner: 'Jonathan'
  }
];

class EventApi {

  static getAllEvents() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], events));
      }, 1000);
    });
  }

}

export default EventApi;
