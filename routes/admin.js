var express = require('express');
var passport = require('passport');
var Order = require('../models/order')

var router = express.Router();


router.use(isAdminLoggedIn);

function isAdminLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    if (req.user.role === 'admin') {
      next()
    }
    else {
      res.sendStatus(403)  //unauthorized
    }
  }
  else {
    res.redirect('/')
  }
}

router.get('/', function(req, res, next){
  res.send('this will be the admin home page.')
})

/* Home page. User should sign in. */
router.get('/allOrders', function(req, res, next) {

  Order.find().then( (allOrders) => {
    res.render('allOrders', { orders: allOrders});
  })

});


module.exports = router;
