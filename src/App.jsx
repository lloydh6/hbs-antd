import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Examples from './examples/Examples';
import PatientLookup from './containers/patientLookup/patientLookup.container';
import RouteNotFound from './components/routeNotFound/routeNotFound.component';
import PatientMatch from './containers/patientMatch/patientMatch.container';
import PatientNotFound from './containers/patientNotFound/patientNotFound.container';
import AuthenticatedRoute from './containers/authenticatedRoute/authenticatedRoute.container';
import LoginContainer from './containers/logIn/logIn.container';
import './App.css';

const App = () => (
  <Layout className="full-height">
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <AuthenticatedRoute exact path="/patient/search" component={PatientLookup} />
      <AuthenticatedRoute exact path="/patient/search/:type/:query" component={PatientNotFound} />
      <AuthenticatedRoute path="/patient/result/:id" component={PatientMatch} />
      <AuthenticatedRoute path="/examples" component={Examples} />
      <AuthenticatedRoute component={RouteNotFound} />
    </Switch>
  </Layout>
);

export default App;
