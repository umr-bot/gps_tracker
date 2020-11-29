//initialize markerdata
var markerData = [];
markerData.push({id:1,name:"Tracker 1", position:{"lat":-33.9249,"long":18.4241}});
markerData.push({id:2,name:"Tracker 2", position:{"lat":-33.9248,"long":18.4242}});
markerData.push({id:3,name:"Tracker 3", position:{"lat":-33.9247,"long":18.4243}});
markerData.push({id:4,name:"Tracker 4", position:{"lat":-33.9246,"long":18.4244}});
markerData.push({id:5,name:"Tracker 5", position:{"lat":-33.9245,"long":18.4245}});

function moveMarkers(x,y) {
	for(var i=0, len=markerData.length; i<len; i++) {
		var thisMarker = markerData[i];
		//adjust both lat and long a bit, unless we don't move
		if(shouldMove()) {
			//0.002 seems like a nice amount
			thisMarker.position.lat += randRange(-0.002,0.002);
			thisMarker.position.long += randRange(-0.002,0.002);
		}
		thisMarker.position.lat += x;
		thisMarker.position.long += y;
	}
}

function shouldMove() {
	// use a delay as a refresh rate
	setTimeout(function(){

	},1000); //delay is in milliseconds
	return true
}

//credit: http://stackoverflow.com/a/1527820/52160
function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

exports.getMapCenter = function(lat_cen=-33.918861, lon_cen=18.423300){
        return [lat_cen, lon_cen]
}

// x and y is the amount that the vehicale moved by
exports.getMarkers = function(x,y) {
	moveMarkers(x,y);
	
	//return
	return markerData;
}
