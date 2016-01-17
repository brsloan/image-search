'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Query = new Schema({
	searchTerms: String,
    whenSearched: String
});

module.exports = mongoose.model('Query', Query);
