$(document).ready(function() {

	//Time between marker refreshes
	var INTERVAL = 2000;

	//Used to remember markers
	var markerStore = {};

	//getMapCenter();
	//var xy = getMapCenter();
	//console.log(xy);
	
	var myLatlng = new google.maps.LatLng(-33.9249,18.4241);
	var myOptions = {
		zoom: 13,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	//var map = new google.maps.Map(document.getElementById("map_canvas"));
	//map.setZoom(13);      // This will trigger a zoom_changed on the map
	//map.setCenter(new google.maps.LatLng(-33.4419, 18.1419));
	//map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
	var currCenter = map.getCenter();
	console.log("currcenter");
	console.log(currCenter);
	getMarkers();	

	function getMarkers() {
		console.log('getMarkers');
		$.get('/markers', {}, function(res,resp) {
			console.dir(res);
			for(var i=0, len=res.length; i<len; i++) {

				//Do we have this marker already?
				if(markerStore.hasOwnProperty(res[i].id)) {
					console.log('Moved markers');
					markerStore[res[i].id].setPosition(new google.maps.LatLng(res[i].position.lat,res[i].position.long));
				} else {
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(res[i].position.lat,res[i].position.long),
						title:res[i].name,
						map:map
					});	
					markerStore[res[i].id] = marker;
					console.log(marker.getTitle());
				}
			}
			window.setTimeout(getMarkers,INTERVAL);
		}, "json");
	}

})
