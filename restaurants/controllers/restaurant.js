const Restaurant = require('../models/restaurant');

exports.restaurant_list = function (req, res) {
    res.render('restaurants/index', {restaurants: Restaurant.allRest})
}

exports.restaurant_create_get = function (req, res) {
    res.render('restaurants/create')
}

exports.restaurant_create_post = function (req, res) {
    var restaurant = new Restaurant(req.body.id, req.body.name, req.body.description);
    restaurant.ubicacion = [req.body.lat, req.body.lng];
    Restaurant.add(restaurant);

    res.redirect('restaurants')
}
exports.restaurant_update_get = function (req, res) {
    var restaurant = Restaurant.findById(req.params.id);

    res.render('restaurants/update', {restaurant})
}

exports.restaurant_update_post = function (req, res) {
    var restaurant = Restaurant.findById(req.params.id);
    restaurant.id = req.body.id;                                       
    restaurant.name = req.body.name;                                       
    restaurant.description = req.body.description;             
    restaurant.location = [req.body.lat, req.body.lng ]            

    res.redirect('/restaurants')
}
exports.restaurant_delete_post = function (req, res) {
    
    Restaurant.removeById(req.body.id);

    res.redirect('/restaurants')
} 