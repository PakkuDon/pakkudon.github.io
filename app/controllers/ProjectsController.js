angular.module('Portfolio').controller('ProjectsController', 
['$http', function($http) {
    var self = this;
    var projects = [];
    
    // Get project data
    $http.get('app/projects.json').then(function(response) {
        projects = response.data;
    });
    
    this.getProjects = function() {
        return projects;
    }
}]);