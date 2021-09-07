var Restaurant  = require("../../models/restaurant");

exports.restaurant_list = function (req, res) {
    res.status(200).json({
        restaurants: Restaurant.allRest
    });
}
exports.restaurant_create = function (req, res) {
    var restaurant = new Restaurant(req.body.id, req.body.name, req.body.description);
    restaurant.location = [req.body.lat, req.body.lng];

    Restaurant.add(restaurant);

    res.status(200).json({
        rest: restaurant
    });
}
exports.restaurant_delete = function (req, res) {
    Restaurant.removeById(req.body.id);
    res.status(204).send();
}