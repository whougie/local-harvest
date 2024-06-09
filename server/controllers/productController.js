const { User, Product, ProductsPurchase, Bag } = require('../models');

module.exports = {
  
  // get all products
  async getProducts(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // get single product
  async getSingleProduct(req, res) {
    try {
      const product = await Product.findOne({ _id: req.params.productId });
      
      if (!product) {
        return res.status(404).json({ message: 'No product with that ID' });
      }
      
      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // create a product
  async createProduct(req, res) {
    try {
      console.log(req.body)

      const product = await Product.create(req.body);
      res.json(product);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  
  // Delete a product
  async deleteProduct(req, res) {
    try {
      const product = await Product.findOneAndDelete({ _id: req.params.productId });
      
      if (!product) {
        res.status(404).json({ message: 'No product with that ID' });
      } else
      res.json({ message: 'Product deleted!' });
      
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  
  //Update a product
  async updateProduct(req, res) {
    try {
      const product = await Product.findOneAndUpdate(
        { _id: req.params.productId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      
      if (!product) {
        res.status(404).json({ message: 'No product with this id!' });
      } else res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

};
