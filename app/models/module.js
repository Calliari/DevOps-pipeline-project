var mongoose = require('mongoose');

var ModuleSchema = new mongoose.Schema ({
	title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  colour: {
  	type: String
  }
});

module.exports = mongoose.model('module', ModuleSchema);