import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Examples from './examples/Examples';
import Header from './containers/header/header.container';
import './App.css';

const App = () => (
  <Layout>
    <Header />
    <Route path="/examples" component={Examples} />
  </Layout>
);

export default App;
