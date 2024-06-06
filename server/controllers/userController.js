const {User, Product, ProductsPurchase, Bag} = require('../models');

module.exports = {
  
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  
  
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
  
  async createUser(req, res) {
    console.log(req)
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

   async userLogin(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(500).json({ status: 'error', msg: 'Could not authenticate user' });
      } 
  
      console.log('User found:', user);
      res.status(200).json({ status: 'cool', msg: 'User authenticated successfully' });
    } catch (err) {
      console.log(err)
      res.status(500).json({ status: 'error', msg: 'Could not authenticate user' });
    }
  },

  // const verify = bcrypt.compare(req.body.password, user.password)
  // if( !verify ){
  //   res.status(500).json({ status: 'error', msg: 'Could not authenticate user' })
  // }
  
  // const token = await createToken(user)
  
  // res
  // .status(200)
  // .cookie('auth-cookie', token, {
  //   maxAge: 86400 * 1000,
  //   httpOnly: false,
  //   secure: process.env.NODE_ENV === 'production'
  // })
   //.json({ status: 'success', payload: user })
//},
  
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
