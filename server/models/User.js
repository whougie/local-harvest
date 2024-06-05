const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email']
    },
    password: {
      type: String,
      required: true
    }
  }, 
  {
    timestamps: true
  }
)

const User = model('user', userSchema);

module.exports = User;