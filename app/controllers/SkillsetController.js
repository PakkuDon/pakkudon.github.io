angular.module('Portfolio').controller('SkillsetController', 
['$http', function($http) {
    var self = this;
    var skillset = {};
    
    // Get skillset data
    $http.get('app/skills.json').then(function(response) {
        skillset = response.data;
    });
    
    this.getLanguages = function() {
        return skillset.languages || [];
    }
    
    this.getFrameworks = function() {
        return skillset.frameworks || [];
    }
    
    this.getTools = function() {
        return skillset.tools || [];
    }
    
    this.getGeneralSkills = function() {
        return skillset.general || [];
    }
}]);