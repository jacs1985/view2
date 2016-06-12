var app = angular.module('myApp', ['uiGmapgoogle-maps','ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "views/viewAdmin.html",
        controller: "homepageController"
    })
     .when("/admin", {
        templateUrl: "views/viewAdmin.html",
        controller: "adminController"
    })
      .when("/user", {
        templateUrl: "views/viewUser.html",
        controller: "userController"
    })
    .when("/registro", {
        templateUrl: "views/formulario_registro.html",
        controller: "registerController"
    })
    .when("/out", {
        templateUrl: "views/homepage.html",
        controller: "homepageController"
    })
    .otherwise({ redirectTo : "/"});
}]);