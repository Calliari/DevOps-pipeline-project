var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  permission: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);