var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/endlessmongo');

module.exports = mongoose;
