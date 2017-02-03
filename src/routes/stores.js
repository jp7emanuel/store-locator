import express from 'express';
import Store from '../models/store';
let router = express.Router();

router.get('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.find()
    .then(doc => {
      res.status(201).json(doc);
    });
});

router.post('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  let item = {

  };
  let data = new Store(item);
  data.save()
    .then( data => {
      res.status(200).json(data);
    })
    .catch(e => next(e));
});

router.get('/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.find({ id_slug: req.id_slug }, (err, store) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(201).send(store);
  });
});

router.put('/:id', (req, res, next) => {
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

router.delete('/:id', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  Store.findOneAndRemove({ id_slug: req.id_slug }, (err, store) => {
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
