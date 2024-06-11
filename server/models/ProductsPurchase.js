const { Schema, model } = require('mongoose');

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
  return this.purchase.length;
})

const ProductsPurchase = model('productsPurchase', productsPurchaseSchema);

module.exports = ProductsPurchase;