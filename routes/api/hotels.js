'use strict';

var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');

router.get('/', function(req, res, next) {

  Hotel.findAll()
  .then((allhotels) => {
    console.log(allhotels);
    res.send(allhotels);
  })
  .catch(next)

});

module.exports = router;
