'use strict';

var Promise = require('bluebird');
var router = require('express').Router();
var Restaurant = require('../../models/restaurant');

router.get('/', function(req, res, next) {
  Restaurant.findAll()
  .then((allRestaurants) => {
    console.log(allRestaurants);
    res.send(allRestaurants);
  })
  .catch(next)
});

module.exports = router;
