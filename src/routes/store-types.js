import express from 'express';
import StoreType from '../models/store-types';
import _ from 'lodash';
import cors from 'cors';

let router = express.Router();
router.all('*', cors());

router.get('api/store-types', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  StoreType.find()
    .then(doc => {
      res.status(200).json(doc);
    });
});

router.post('api/store-types', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  let store = _.merge(new StoreType(), req);
  store.save()
    .then( data => {
      res.status(200).json(data);
    })
    .catch(e => next(e));
});

router.put('api/store-types/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  StoreType.findOne({ _id: req._id }, (err, store) => {
    if (err) {
      return res.status(500).send(err);
    }

    store.save((err, store) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.status(201).send(store);
    });
  });
});

router.delete('api/store-types/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  StoreType.findOneAndRemove({ _id: req._id }, (err, store) => {
    if (err) {
      return res.status(500).send(err);
    }
    // store.title = req.body.title || store.title;
    // store.description = req.body.description || store.description;
    // store.price = req.body.price || store.price;
    // store.completed = req.body.completed || store.completed;

    res.status(204).send(store);
  });
});

export default router;
