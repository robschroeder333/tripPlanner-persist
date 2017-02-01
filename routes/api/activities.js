'use strict';

var Promise = require('bluebird');
var router = require('express').Router();
var Activity = require('../../models/activity');

router.get('/', function(req, res, next) {

  Activity.findAll()
  .then((allActivities) => {
    console.log(allActivities);
    res.send(allActivities);
  })
  .catch(next)
});

module.exports = router;
