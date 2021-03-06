var mongoose = require('mongoose');

var bocksSchema = new mongoose.Schema({
  userName: String,
  title: String,
  code: String,
  highlights: Array,
  isPrivate: Boolean,
  tags: Array,
  createdAt: {type: Date, default: Date.now},
  modifiedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Bocks', bocksSchema);
