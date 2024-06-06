const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.pre("save", async function(next){
  this.password = await bcrypt.hash(this.password, 10);
  next()
})

// Not working for the time being, but we shouldn't need this to work for the project
// userSchema.pre("findOneAndUpdate", async function(next){
//   console.log("In update")
  
//   console.log(this.password)
//   console.log(this.email)

//   this.password = await bcrypt.hash(this.password, 10);
//   next()
// })

const User = model('user', userSchema);

module.exports = User;