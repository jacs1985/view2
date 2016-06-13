var app = angular.module('myApp', ['uiGmapgoogle-maps','ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "views/viewLogin.html",
        controller: "loginController"
    })
     .when("/admin", {
        templateUrl: "views/viewAdmin.html",
        controller: "adminController"
    })
      .when("/user", {
        templateUrl: "views/viewUser.html",
        controller: "userController"
    })
    .when("/registrar", {
        templateUrl: "views/formulario_registro.html",
        controller: "registerController"
    })
     .when("/usuarios", {
        templateUrl: "views/mostrarUsuarios.html",
        controller: "showController"
    })
    .when("/login-out", {
        templateUrl: "views/cerrarSesion.html",
        controller: "cerrarSesionController"
    })
     .when("/out", {
        templateUrl: "views/homepage.html",
        controller: "homepageController"
    })
    .otherwise({ redirectTo : "/"});
}]);