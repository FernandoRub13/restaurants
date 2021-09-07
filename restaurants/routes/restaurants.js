var express = require('express');
var router = express.Router();
var restaurantController = require('../controllers/restaurant');

router.get('/', restaurantController.restaurant_list);
router.get('/create', restaurantController.restaurant_create_get);
router.post('/post', restaurantController.restaurant_create_post);

router.get('/:id/update', restaurantController.restaurant_update_get);
router.post('/:id/update', restaurantController.restaurant_update_post);

router.post('/:id/delete', restaurantController.restaurant_delete_post);

module.exports = router;