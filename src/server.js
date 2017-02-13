import express from 'express';
import path from 'path';
import db from './services/db';
import storesRoute from './routes/stores';
import storeTypesRoute from './routes/store-types';
import bodyParser from 'body-parser';

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../build')));
app.use([storesRoute, storeTypesRoute]);

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port %d!', server.address().port);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

export default server;
