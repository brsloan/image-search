'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');

var app = express();
require('dotenv').load();

mongoose.connect('mongodb://heroku_3crsww9t:rcdg7ddmf5barf6a1mt597du86@ds047095.mongolab.com:47095/heroku_3crsww9t');

app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});