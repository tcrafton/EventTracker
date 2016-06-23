import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import CalendarPage from './components/CalendarPage';
import OverviewPage from './components/OverviewPage';
import Login from './components/Login';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="events-list" component={EventsPage} />
    <Route path="calendar" component={CalendarPage} />
    <Route path="overview" component={OverviewPage} />
    <Route path="login" component={Login} />
  </Route>
);
