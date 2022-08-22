const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Item = require('../models/Item');

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const items = await Item.getAll(req.user.id);
      res.json(items);
    } catch (e) {
      next(e);
    }
  })
  .post('/', authenticate, async (req, res, next) => {
    try {
      const user_id = req.user.id;
      const createItem = await Item.insert({ ...req.body, user_id });
      console.log(createItem);
      res.json(createItem);
    } catch(e) {
      next(e);
    }
  })
  
  
;

