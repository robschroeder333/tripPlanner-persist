'use strict';

var Promise = require('bluebird');
var router = require('express').Router();
var Day = require('../../models/day');

router.get('/', function(req, res, next) {

  Day.findAll()
  .then((allDays) => {
    res.send(allDays);
  })
  .catch(next);

});

router.get('/:id', function(req, res, next){

  Day.findById(req.params.id)
  .then((dayFound) => {
    if(dayFound === null) throw new Error(`Day ${req.params.id} does not exist!`);
    else res.send(dayFound);
  })
  .catch(next);

});

router.delete('/:id', function(req, res, next){

  Day.findById(req.params.id)
  .then((dayFound) => {
    if(dayFound === null) throw new Error(`Day ${req.params.id} does not exist!`);
    else res.send(`Day ${ req.params.id } is deleted!`);
  })
  .catch(next);

});

router.post('/:id', function(req, res, next){

  Day.create({
    number: req.params.id
  })
  .then((newDayCreated) => res.send(newDayCreated))
  .catch(next);

});

// router.put('/', function(req, res, next) {


// });

// router.post('/', function(req, res, next) {


// });

module.exports = router;


/*

POST - New day
PUT - Adding / Updating Hotel in the days model
POST - Adding activities OR restaurants
DELETE - delete an instance/record for that day on days model, also on day_restaurant and day_activity
DELETE - activity
DELETE - restaurant

*/

