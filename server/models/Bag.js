const { Schema, model } = require('mongoose');

const bagSchema = new Schema(
  {
    isBagCheckedOut: {
      type: Boolean,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    productsPurchase: {
      type: Schema.Types.ObjectId,
      ref: 'productsPurchase'
    },
  },
  {
    timestamps: true
  }
);


const Bag = model('bag', bagSchema);

module.exports = Bag;