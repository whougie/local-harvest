const {User, Product, ProductsPurchase, Bag} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()


async function createToken(user) {
 const tokenData = { email: user.email } 
 const token = await jwt.sign(tokenData, process.env.TOKEN_ENCRYPT_KEY);

 return token;
}

module.exports = {
  
  // /api/users
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // /api/users/:userId
  // get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  
  // /api/users
  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      const token = await createToken(user);

      // generate the cookie with token and set the cookie configs
      res
      .status(200)
      .cookie('auth-cookie', token, {
        maxAge: 86400 * 1000,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production'
      })
      .json( { status: 'success', payload: user} );
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  
  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      
      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      } else
        res.json({ message: 'User deleted!' });

      // else { if (user.thoughts.length) {
      //   await User.deleteMany({ _id: { $in: user.thoughts } });
      // }
    // }
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
},

//Update a user
async updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    
    if (!user) {
      res.status(404).json({ message: 'No user with this id!' });
    } else res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
},

async verifyUser(req, res) {
  const cookie = req.cookies['auth-cookie'];

  if (!cookie) {
    res.status(401).json({ status: 'error', msg: 'Could not authenticate user, there is not auth-cookie' })
  }

  //Verify the cookie and decrypt 
  const decryptedCookie = jwt.verify(cookie, process.env.TOKEN_ENCRYPT_KEY);

  let user;

  try { // see if the user still is an exists in the DB
    user = await User.findOne({ email: decryptedCookie.email })
  } catch(err){
    res.status(500).json({ status: 'error', msg: 'Could not authenticate user due to an error' })
  }

  if (!user) 
    res.status(401).json({ status: 'error', msg: 'Could not authenticate user' })
  else 
    res.status(200).json({ status: 'success' })

}

// Add a friend to a user
// async addFriendToUser(req, res) {
//   try {
//     const user = await User.findOneAndUpdate(
//       { _id: req.params.userId },
//       { $push: {friends: req.params.friendId}  },
//       { runValidators: true, new: true }
//     );
    
//     if (!user) {
//       res.status(404).json({ message: 'No user with this id!' });
//     } else res.json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// },

// Remove a friend from a user
// async deleteFriendToUser(req, res) {
//   try {
//     const user = await User.findOneAndUpdate(
//       { _id: req.params.userId },
//       { $pull: {friends: req.params.friendId}  },
//       { runValidators: true, new: true }
//     );
    
//     if (!user) {
//       res.status(404).json({ message: 'No user with this id!' });
//     } else res.json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

};
