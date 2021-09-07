var express = require('express');
var router = express.Router();
var restaurantController = require('../../controllers/api/restaurantControllerAPI');

router.get('/', restaurantController.restaurant_list);

router.post('/create', restaurantController.restaurant_create);

router.delete('/delete', restaurantController.restaurant_delete);

module.exports = router;