/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable global-require */
import express from 'express';
import webpack from 'webpack';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import config from './config';

const app = express();

if (config.server.env === 'development') {
  console.log('Load development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const webpackServerConfig = {
    port: config.server.port,
    hot: true,
  };
  app.use(webpackDevMiddleware(compiler, webpackServerConfig));
  app.use(webpackHotMiddleware(compiler));
}

const setRsponse = (html) => (`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" type="text/css" href="assets/app.css"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <title>FrcGustavo</title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script src="assets/app.js"></script>
        </body>
        </html>
    `);

const renderApp = (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      { renderRoutes(serverRoutes) }
    </StaticRouter>,
  );
  console.log(html);

  res.send(setRsponse(html));
};

app.get('*', renderApp);

app.listen(config.server.port, () => {
  console.log(`Server is listening on http://localhost:${config.server.port}`);
});
