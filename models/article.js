var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    text: String
  , handle: String
  , timestamp: { type: Date, default: Date.now }
  , like: { type: Boolean, default: false }
});

var tagSchema = new mongoose.Schema({
    text: String
});

var articleSchema = new mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
, text: String
, timestamp: { type: Date, default: Date.now }
, imageUri: String
, tags: [tagSchema]
, comments: [commentSchema]
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
