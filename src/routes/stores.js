import express from 'express';
import Store from '../models/store';
import StoreType from '../models/store-types';
import _ from 'lodash';
import cors from 'cors';

let router = express.Router();
router.all('*', cors());

router.get('/stores', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.find()
    .then(doc => {
      res.status(201).json(doc);
    });
});

router.post('/stores', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  let store = new Store(req.body.data);
  store.save()
    .then( data => {
      res.status(200).json(data);
    })
    .catch(e => next(e));
});

router.get('/stores/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.find({ id_slug: req.id_slug }, (err, store) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(201).send(store);
  });
});

router.put('/stores/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.findOne({ id_slug: req.id_slug }, (err, store) => {
    if (err) {
      return res.status(500).send(err);
    }
    // store.title = req.body.title || store.title;
    // store.description = req.body.description || store.description;
    // store.price = req.body.price || store.price;
    // store.completed = req.body.completed || store.completed;

    store.save((err, store) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.status(201).send(store);
    });
  });
});

router.delete('/stores/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.findOneAndRemove({ id_slug: req.id_slug }, (err, store) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(204).send(store);
  });
});

export default router;
