/* eslint-disable no-console */
import express from 'express';

import BlogController from './controllers/BlogController';

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

// app.get('/',);
app.get('/blog', BlogController.index);
// app.get('/slug');

app.listen(config.server.port, () => {
  console.log(`Server is listening on http://localhost:${config.server.port}`);
});
