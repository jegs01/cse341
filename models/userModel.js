const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, 
    trim: true, 
  },
  lastName: {
    type: String,
    required: true, 
    trim: true, 
  },
  email: {
    type: String,
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true, 
  },
  favoriteColor: {
    type: String,
    trim: true, 
  },
  birthday: {
    type: Date,
    required: true, 
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;