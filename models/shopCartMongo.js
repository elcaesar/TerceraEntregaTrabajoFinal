const mongoose = require("mongoose");
const Product = require('./productMongo')

const cartSchema = new mongoose.Schema({
  timestamp:{
      type: Number,
      required: false,
  },
  productos : [{
      product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product'
      },
      cantidad: {
          type: Number,
          required: true
      }
      
  }
  ]
});

cartSchema.methods.toJSON = function(){
  const {__v,_id,...data} = this.toObject();
  data.id = _id;
  return data;
}

module.exports = mongoose.model("Cart", cartSchema);
