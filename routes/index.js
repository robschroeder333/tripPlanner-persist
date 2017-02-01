var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});


// router.get('/api/:attraction', function(req, res, next) {
//
//
//
//   // let apiRoute = req.params.attraction;
//   // if (apiRoute === 'hotel' || apiRoute === 'hotels'){
//   //   res.redirect('/api/hotels.js');
//   // } else if(apiRoute === 'activity' || apiRoute === 'activities') {
//   //
//   // } else if(apiRoute === 'restaurant' || apiRoute === 'restaurants') {
//   //
//   // } else {
//   //   let err = new Error();
//   //   err.status = 404;
//   //   err.message = 'no route to there';
//   //   next(err);
//   // }
//
// });

module.exports = router;
