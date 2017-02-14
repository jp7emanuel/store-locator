import express from 'express';
import Store from '../models/store';
import StoreType from '../models/store-types';
import _ from 'lodash';
import cors from 'cors';

let router = express.Router();
router.all('*', cors());

router.get('/api/stores', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.find()
    .then(doc => {
      res.status(200).json(doc);
    });
});

router.get('/api/stores/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.findOne({ _id: req.params.id }, (err, store) => {
    if (err) {
      return next(error);
    }

    return res.status(201).send(store);
  });
});

router.post('/api/stores', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  let store = new Store(req.body.data);
  store.save()
    .then( data => {
      res.status(202).json(data);
    })
    .catch(e => next(e));
});

router.put('/api/stores/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  let id = req.params.id;
  let body = req.body.data;

  Store.findByIdAndUpdate(id, body, function(error, store) {
    if (error) {
      return next(error);
    }

    // Render not found error
    if (!store) {
      return res.status(404).json({
        message: 'Store with id ' + id + ' can not be found.'
      });
    }

    return res.status(203).json(store);
  });
});

router.delete('/api/stores/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.findByIdAndRemove(req.params.id, function(error, store) {
    if (error) {
      return next(error);
    }

    // Render not found error
    if (!store) {
      return res.status(404).json({
        message: 'Store with id ' + id + ' can not be found.'
      });
    }

    return res.status(204).json(store);
  });
});

export default router;
