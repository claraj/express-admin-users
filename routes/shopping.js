var express = require('express');
var router = express.Router();
var Order = require('../models/order')


router.use(function(req, res, next){

  console.log('is logged in')
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('store');
});


router.post('/order', function(req, res, next){
  var order = Order({thing: 'hat', _creator: req.user })


  order.save().then((new_order) => {
    console.log(new_order)
    res.redirect(`/store/order/${new_order._id}`)
  }).catch( err => {next(err)} )
});



router.get('/order/:_id', function(req, res, next){
  Order.findById(req.params._id).then( order => {
    res.render('order', {order: order})
  })
})



module.exports = router;
