const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  source: {
    type: String
  },
  published_date: {
    type: Number
  },
  doi: {
    type: String
  },
  claim: {
    type: String
  },
  evidence: {
    type: String
  },
  se_practice: {
    type: String
  },
  status: {
    type: String,
    default: 'Pending'
  },
  rate: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model('Articles', ArticleSchema);