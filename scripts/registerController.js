app.controller('registerController', function($scope) {
    $scope.newUser = {
		name:"",
		rut:"",
		email:"",
		patente:""
	};
	$scope.users = [];
	
	
	$scope.addNewUser = function (user) {
		 console.log(user);
		 $scope.users.push(angular.extend({},user));		 
	}

	$scope.cancel = function (){
    	$scope.location.path("/");
    };
});