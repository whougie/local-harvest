const {User, Product, ProductsPurchase, Bag} = require('../models');

module.exports = {
  
  // get all productsPurchases
  async getProductsPurchases(req, res) {
    try {
      const productsPurchases = await ProductsPurchase.find().populate(
        [
        {
          path: "user"
        },
        {
          path: "purchase.product"  
        }
       ]);
      res.json(productsPurchases);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  
  // get single productsPurchase
  async getSingleProductsPurchase(req, res) {
    try {
      const productsPurchase = await ProductsPurchase.findOne( { _id: req.params.productsPurchaseId }  ).populate('user').populate(
        [
        {
          path: "user"
        },
        {
          path: "purchase.product"  
        }
       ]);

      if (!productsPurchase) {
        return res.status(404).json({ message: 'No productsPurchase with that ID' });
      }
      
      res.json(productsPurchase);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // create a productsPurchase
  async createProductsPurchase(req, res) {
    try {
      const productsPurchase = await ProductsPurchase.create(req.body);
      res.json(productsPurchase);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  
  // Delete a productsPurchase
  async deleteProductsPurchase(req, res) {
    try {
      const productsPurchase = await ProductsPurchase.findOneAndDelete({ _id: req.params.productsPurchaseId });
      
      if (!productsPurchase) {
        res.status(404).json({ message: 'No productsPurchase with that ID' });
      } else
      res.json({ message: 'Products Purchase deleted!' });
      
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  
  
  //Update a productsPurchase
  async updateProductsPurchase(req, res) {
    try {
      const productsPurchase = await ProductsPurchase.findOneAndUpdate(
        { _id: req.params.productsPurchaseId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      
      if (!productsPurchase) {
        res.status(404).json({ message: 'No productsPurchase with this id!' });
      } else res.json(productsPurchase);
    } catch (err) {
      res.status(500).json(err);
    }
  }




};
