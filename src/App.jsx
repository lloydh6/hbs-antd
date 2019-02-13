import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Examples from './examples/Examples';
import Header from './containers/header/header.container';
import PatientLookup from './containers/patientLookup/patientLookup.container';
import RouteNotFound from './components/routeNotFound/routeNotFound.component';
import PatientMatch from './containers/patientMatch/patientMatch.container';
import patientNotFound from './containers/patientNotFound/patientNotFound.container';
import './App.css';

const {
  Content,
} = Layout;

const App = () => (
  <Layout>
    <Header />
    <Content>
      <Switch>
        <Route path="/patientLookup" component={PatientLookup} />
        <Route path="/patient/notFound" component={patientNotFound} />
        <Route path="/patient/:id" component={PatientMatch} />
        <Route path="/examples" component={Examples} />
        <Route component={RouteNotFound} />
      </Switch>
    </Content>
  </Layout>
);

export default App;
