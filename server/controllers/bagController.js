const { User, Product, ProductsPurchase, Bag } = require('../models');
const { populate } = require('../models/User');

module.exports = {
  
  // get all bags
  async getBags(req, res) {
    try {
      const bags = await Bag.find().populate([ 
        {
          path: 'user'
        }, 
        {
          path: 'productsPurchase',
          populate: {
            path: "purchase",
            populate: {
              path: "product"
            }
          }
        }
      ]
      );
      res.json(bags);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // get single bag
  async getSingleBag(req, res) {
    try {
      const bag = await Bag.findOne({ _id: req.params.bagId }).populate(
        [ 
          {
            path: 'user'
          }, 
          {
            path: 'productsPurchase',
            populate: {
              path: "purchase",
              populate: {
                path: "product"
              }
            }
          }
        ]
      );
      
      if (!bag) {
        return res.status(404).json({ message: 'No bag with that ID' });
      }
      
      res.json(bag);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // create a bag
  async createBag(req, res) {
    try {
      const bag = await Bag.create(req.body);
      res.json(bag);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  
  // Delete a bag
  async deleteBag(req, res) {
    try {
      const bag = await Bag.findOneAndDelete({ _id: req.params.bagId });
      
      if (!bag) {
        res.status(404).json({ message: 'No bag with that ID' });
      } else
      res.json({ message: 'Bag deleted!' });
      
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  
  //Update a bag
  async updateBag(req, res) {
    try {
      const bag = await Bag.findOneAndUpdate(
        { _id: req.params.bagId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      
      if (!bag) {
        res.status(404).json({ message: 'No bag with this id!' });
      } else res.json(bag);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
};