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
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <title>FrcGustavo</title>
        </head>
        <body>
            <div id="app"></div>
            <script src="assets/app.js"></script>
        </body>
        </html>
    `);
});

app.listen(config.server.port, () => {
    console.log(`Server is listening on http://localhost:${config.server.port}`);
});