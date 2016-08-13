angular.module('Portfolio').controller('ProjectDetailsController', 
['$routeParams', '$http',  
function($routeParams, $http) {
    var self = this;
    var project = {};
    
    // Get project data
    $http.get('app/projects.json').then(function(response) {
        var projects = response.data;
        for (var i = 0; i < projects.length; i++) {
            if (projects[i].id === $routeParams.id) {
                project = projects[i];
                break; 
            }
        }
    });
    
    this.getProject = function() {
        return project;
    }

    // Scroll to project details
    $('body').animate({ scrollTop: $('#details').offset().top }, 'fast');
}]);