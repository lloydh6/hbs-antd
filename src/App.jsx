import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Examples from './examples/Examples';
import Header from './containers/header/header.container';
import PatientLookup from './containers/patientLookup/patientLookup.container';
import './App.css';

const {
  Content,
} = Layout;

const App = () => (
  <Layout>
    <Header />
    <Content>
      <Route path="/patientLookup" component={PatientLookup} />
      <Route path="/examples" component={Examples} />
    </Content>
  </Layout>
);

export default App;
