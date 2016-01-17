var https = require('https');
var Queries = require('../models/queries.js');


function SearchHandler () {
    this.search = function(req,res){
        searchFor(req.params.searchterms, req.query.offset, res);
    };
    
    function searchFor(searchterms, offset, res){
    	var key = 'AIzaSyCyYoDaLp53gObfXvhlG90mU1YBEHc-VVE';
    	var cx = '006678107556890717824:m-ee3ajzam8';
    	var queryString = 'https://www.googleapis.com/customsearch/v1?q=' + searchterms + '&start=' + offset + '&cx=' + cx + '&searchType=image&key=' + key;
    	var allData = '';
    	
    	https.get(queryString, function(response){
    		response.setEncoding('utf8');
    		response.on('data',function(data){
    			allData += data;	
    		});
    		response.on('end',function(){
    			var dataObj = JSON.parse(allData);
    			sendResults(dataObj, res);
    		});
    	});
    }

    function sendResults(resultsData, res){
    	var results = [];
    	
    	for(var i=0;i<resultsData.items.length;i++){
    		var item = resultsData.items[i];
    		results.push({
    			url: item.link,
    			snippet: item.snippet,
    			thumbnail: item.image.thumbnailLink,
    			context: item.image.contextLink
    		});
    	}
    	res.end(JSON.stringify(results));
    }
}

module.exports = SearchHandler;