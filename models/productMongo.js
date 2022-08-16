const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  prodName: String,
  prodPrice: Number,
  prodStock: Number,
  prodImage: String
});

productSchema.methods.toJSON = function(){
  const {__v,_id,...data} = this.toObject();
  data.id = _id;
  return data;
}

module.exports = mongoose.model("Product", productSchema);
