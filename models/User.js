/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  account: Number,
  contactus: String,
  email: String,
  pin: String,
  limitperday: Number,
  address: String,
  phone: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

