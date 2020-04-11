import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Blog from '../pages/Blog';
import Home from '../pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;