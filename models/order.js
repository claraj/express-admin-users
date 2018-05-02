var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;


var orderSchema = new mongoose.Schema ({

  thing: String,
  shipped : { type: Boolean, default: false},

  /* A reference to the User object who created this order
   It is possible to populate this field with all of the
   details of the User object by using the populate() function */

  _creator : { type : ObjectId, ref : 'User' }

});


var Order = mongoose.model('order', orderSchema);

module.exports = Order;
