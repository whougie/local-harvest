const { Schema, model } = require('mongoose');
// const date = require('date-and-time');

const productsPurchaseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    purchase: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'product'
        },
        qtyPurchase: {
          type: Number,
          required: true
        },
        totalPurchase: {
          type: Number,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    },
    id: false
  }
);


productsPurchaseSchema.virtual('productCount').get(function() {
// Need some code to maybe be more specific of the items being added for product inventory
  return this.purchase.length;
})

const ProductsPurchase = model('productsPurchase', productsPurchaseSchema);

module.exports = ProductsPurchase;