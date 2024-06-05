const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    price: {
      type: Number,
      required: true
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