var express = require('express');
var app = express();

var markerData = require('./markerData.js');

//define my static folder
app.use('/static', express.static(__dirname + "/public",{maxAge:86400000}));

// Send /views/index.html file to root url '/' which is same as 127.0.0.1/:3000
app.get('/', function(req, res) {	
	res.sendfile(__dirname+"/views/index.html");
});

// Call getMarkers function from js file markerData.js
app.get('/markers', function(req, res) {
	res.send(JSON.stringify(markerData.getMarkers(0.0,0.0)));
});

// Listen on port 3000 for any changes
app.listen(3000);
console.log("Listening to port 3000");
