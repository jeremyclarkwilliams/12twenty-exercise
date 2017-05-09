// Hardcoded events data in place of pulling from API/DB
export const EVENTS_DATA = [
  {
    details: {
      name: 'Event Name',
      company: 'Company Name',
      type: 'Event Type',
      location: 'Event Location',
    },
    date: {
      start: 1492876800000,
      end: 1492891200000,
    },
    status: 'closed',
    registrants: 0,
  },
  {
    details: {
      name: 'Test Event',
      company: 'Random Company',
      type: '',
      location: '',
    },
    date: {
      start: 1493074800000,
      end: 1493074800000,
    },
    status: 'open',
    registrants: 42,
  },
  {
    details: {
      name: 'Big Epic Event',
      company: '',
      type: '',
      location: 'Westwood',
    },
    date: {
      start: 1494086400000,
      end: 1494147600000,
    },
    status: 'closed',
    registrants: 5,
  },
];

// TODO: Generate options from EVENTS_DATA
export const EVENTS_FILTERS = [
  {
    path: 'details.company',
    label: 'Company Name',
    options: [
      'All',
      'Company',
      'Random'
    ],
  },
  {
    path: 'details.type',
    label: 'Event Type',
    options: [
      'All',
      'Event Type',
      'Crazy'
    ],
  },
  {
    path: 'status',
    label: 'Event Status',
    options: [
      'All',
      'Closed',
      'Open'
    ],
  },
];
