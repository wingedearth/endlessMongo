var mongoose = require('mongoose');
var Article = require('./article');

var userSchema = new mongoose.Schema({
  email:     String,
  handle:    String,
  image_uri: String
});

// search articles by user/creator
userSchema.methods.articles = function(callback) {
  Article.find({creator: this._id}, function(err, articles) {
    callback(err, articles);
  });
};

// This gets all instances of Articles, and then all of
// their comments and tags (which are populated),
// and then filters them by User ID.
userSchema.methods.comments = function(callback) {
  var user = this;
  Article.find({})
      .populate('comments.commenter')
      .exec(function(err, articles) {

    comments = articles.reduce(function (comments, blub) {
      return comments.concat(Article.comments);
    }, []);

    comments = comments.filter(function(comment) {
      return comment.commenter._id.equals(user._id);
    })
    callback(err, comments);
  });
};

var User = mongoose.model('User', userSchema);

module.exports = User;
