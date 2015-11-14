var mongoose = require('./config/database');
var locus    = require('locus')

var Article = require('./models/article');
var User = require('./models/user');

eval(locus)

mongoose.disconnect();
