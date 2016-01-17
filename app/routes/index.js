'use strict';

var path = process.cwd();
var SearchHandler = require(path + '/app/controllers/searchHandler.server.js');

module.exports = function (app) {

	var searchHandler = new SearchHandler();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/api/imagesearch/:searchterms')
		.get(searchHandler.search);
};


