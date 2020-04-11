import express from 'express';
import config from './config';

const app = express();

app.get('*', function(req, res, next) {
    res.send('Hello world since express');
});

app.listen(config.server.port, () => {
    console.log(`Server is listening on http://localhost:${config.server.port}`);

});