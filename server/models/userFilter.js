const mongoose = require('mongoose');

const userFilterSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  filterMinAge: {
    type: Number,
  },
  filterMaxAge: {
    type: Number,
  },
  filterMbti: {
    type: String,
  },
  filterSex: {
    type: Boolean,
  },
  filterDistance: {
    type: Number,
  },
  filterInterest: [{ type: String, required: true }],
  filterHobby: [{ type: String, required: true }],
  //   filterMaxAge: {
  //     type: String,
  //     lowercase: true,
  //     enum: ['fruit', 'vegetable', 'dairy'],
  //   },
});

const UserFilter = mongoose.model('UserFilter', userFilterSchema);

module.exports = UserFilter;
