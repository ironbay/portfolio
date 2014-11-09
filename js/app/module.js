var app = angular.module("portfolio", ["ngRoute"]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl : '',
    })

}]);
