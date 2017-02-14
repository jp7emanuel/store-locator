import express from 'express';
import StoreType from '../models/store-types';
import _ from 'lodash';
import cors from 'cors';

let router = express.Router();
router.all('*', cors());

router.get('/api/store-types', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  StoreType.find()
    .then(doc => {
      res.status(200).json(doc);
    });
});

router.post('/api/store-types', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  let store = _.merge(new StoreType(), req);
  store.save()
    .then( data => {
      res.status(200).json(data);
    })
    .catch(e => next(e));
});

export default router;
