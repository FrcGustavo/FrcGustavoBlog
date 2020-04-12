import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Error from '../pages/Error';

import '../assets/styles/main.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route component={Error} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
