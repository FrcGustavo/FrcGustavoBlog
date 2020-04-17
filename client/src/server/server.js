/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import express from 'express';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Layout from '../frontend/components/Layout';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers/index';
import initialState from '../frontend/initialState';

import setResponse from './utils/setResponse';
import loadConfigDev from './utils/loadConfigDev';
import loadConfigProd from './utils/loadConfigProd';
import config from './config';

const app = express();

if (config.server.env === 'development') {
  console.log('Load development config');
  loadConfigDev(app);
} else {
  loadConfigProd(app);
}

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>
          { renderRoutes(serverRoutes) }
        </Layout>
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.get('*', renderApp);

app.listen(config.server.port, () => {
  console.log(`Server is listening on http://localhost:${config.server.port}`);
});
