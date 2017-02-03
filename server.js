import express from 'express';

import db from './src/services/db'
import storesRoute from './src/routes/stores';
import bodyParser from 'body-parser';

var app = express();

app.use(bodyParser.json());
app.use(storesRoute);

var server = app.listen(8080, function () {
    console.log('Listening on port 8080!');
});

export default server;
