const { Schema, model } = require('mongoose');

//model for our products
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true,
      minlength: 1,
      maxlength:4
    },
    qty: {
      type: Number,
      required: true
    },
    picture: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


const Product = model('product', productSchema);

module.exports  = Product;