const express = require('express');
const CategoryController = require('./controllers/CategoryController');
const ItemController = require('./controllers/ItemController');
const router = express.Router();

//app routes
router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
router.patch('/categories/:category', CategoryController.update);
router.delete('/categories/:category', CategoryController.destroy);

router.get('/items', ItemController.index);
router.post('/items', ItemController.store);
router.patch('/items/:item', ItemController.update);
router.delete('/items/:item', ItemController.destroy);

module.exports = router;