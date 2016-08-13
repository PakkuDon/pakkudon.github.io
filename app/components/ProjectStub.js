angular.module('Portfolio').component('projectStub', {
    templateUrl: 'app/templates/project-stub.html',
    controller: 'ProjectStubController',
    controllerAs: 'projectStubCtrl',
    bindings: {
        project: '='
    }
});