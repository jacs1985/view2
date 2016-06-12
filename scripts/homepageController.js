app.controller('homepageController', ['$scope', function($scope){
	$scope.map = { 
		center: { 
			latitude: -33.048,
			longitude: -71.611	 
		}, 
		zoom: 12
	};
	
	// $scope.marker = {
	// 	id: 0,
	// 	coords: {
	// 		latitude:-33.048,
	// 		longitude: -71.611	
	// 	},
	// 	options: { draggable: true },
	// 	events: {
	// 		dragend: function (marker, eventName, args) {
 //          		var lat = marker.getPosition().lat();
 //          		var lon = marker.getPosition().lng();
	// 	    	$scope.marker.options = {
	//         	    draggable: true,
 //            		labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
 //            		labeAnchor: "100 0",
 //            		labelClass: "marker-labels"
 //          		};
 //          	} 
	// 	}
	// }
}])