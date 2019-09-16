var mongoose = require('mongoose');

var InformationSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: Number,
  items: String,
  price: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Information', InformationSchema);
