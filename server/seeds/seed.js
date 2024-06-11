const db = require('../config/connection');
const { Product, Bag, ProductsPurchase, User } = require('../models');

// Load seed data from JSON files
const productSeeds = require('./product-data.json');
const bagSeeds = require('./bag.json');
const productsPurchasedSeeds = require('./products-purchased.json');
const userSeeds = require('./user.json');

db.once('open', async () => {
  try {
    // Clear existing data 
    // Keeping to make it easier to clear out DB using seeds
    // await Product.deleteMany({});
    // await Bag.deleteMany({});
    // await ProductsPurchase.deleteMany({});
    // await User.deleteMany({});

    // Insert seed data
    await Product.create(productSeeds); // Products is the only thing that needs to be seeded, everything else can be done through the site
    // Keeping the below for when needed
    // await Bag.create(bagSeeds);
    // await ProductsPurchase.create(productsPurchasedSeeds);
    // await User.create(userSeeds);

    console.log('All data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
});
