// Initialize modules
var app = angular.module('Portfolio', ['ngRoute', 'angular-carousel']);

// Configure routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/templates/home.html'
        })
        .when('/project/:id', {
            controller: 'ProjectDetailsController as projectCtrl',
            templateUrl: 'app/templates/project-details.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});