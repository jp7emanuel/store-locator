import express from 'express';
import db from './services/db'
import storesRoute from './routes/stores';
import storeTypesRoute from './routes/store-types';
import bodyParser from 'body-parser';

var app = express();

app.use(bodyParser.json());
app.use([storesRoute, storeTypesRoute]);

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port %d!', server.address().port);
});

export default server;
