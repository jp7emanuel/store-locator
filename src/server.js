import express from 'express';

import db from './services/db'
import storesRoute from './routes/stores';
import bodyParser from 'body-parser';

var app = express();

app.use(bodyParser.json());
app.use(storesRoute);

var server = app.listen(3000, function () {
    console.log('Listening on port 3000!');
});

export default server;
