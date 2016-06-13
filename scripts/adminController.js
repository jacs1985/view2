app.controller('adminController', ['$scope', function($scope){
	$scope.map = { 
		center: { 
			latitude: -33.048,
			longitude: -71.611	 
		}, 
		zoom: 12
	};
	var neighborhoods = [
  {lat: -33.011, lng: -71.647},
  {lat: -33.049, lng: -71.622},
  {lat: -33.097, lng: -71.696},
  {lat: -33.017, lng: -71.694}
	];

var markers = [];
var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 12,
//     center: {lat: -33.048, lng: -71.611}
//   });
// }


function drop() {
  clearMarkers();
  for (var i = 0; i < neighborhoods.length; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
}])