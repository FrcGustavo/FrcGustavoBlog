import express from 'express';
import webpack from 'webpack';

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
        hot: true
    }
    app.use(webpackDevMiddleware(compiler, webpackServerConfig));
    app.use(webpackHotMiddleware(compiler));
}

app.get('*', function(req, res, next) {
    res.send('Hello world since express');
});

app.listen(config.server.port, () => {
    console.log(`Server is listening on http://localhost:${config.server.port}`);
});