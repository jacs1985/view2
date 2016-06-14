app.controller('registrarController', function($scope) {
   
	$scope.addNewUser = function (user) {
		 console.log(user);
		 $scope.users.push(angular.extend({},user));		 
	}

	$scope.cancel = function (){
    	$scope.location.path("/");
    };
});