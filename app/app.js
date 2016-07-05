// Initialize modules
var app = angular.module('Portfolio', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html'
        })
        .when('/project/:id', {
            controller: 'ProjectController as projectCtrl',
            templateUrl: 'app/views/project.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});