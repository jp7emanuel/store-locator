import express from 'express';
import StoreType from '../models/store-type';
import _ from 'lodash';
import cors from 'cors';
import errorHandler from '../services/error-handler';

let router = express.Router();
router.all('*', cors());

router.get('/api/store-types', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  StoreType.find((err, storeTypes) => {
    if (err) {
      return errorHandler(err, req, res, next);
    }

    return res.status(200).json(storeTypes);
  });
});

router.post('/api/store-types', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  let storeType = _.merge(new StoreType(), req);
  storeType.save((err, storeType) => {
    if (err) {
      return errorHandler(err, req, res, next);
    }

    return res.status(200).json(storeType);
  });
});

export default router;
