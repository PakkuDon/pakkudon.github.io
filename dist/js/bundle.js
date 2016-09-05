// Initialize modules
var app = angular.module('Portfolio', ['ngRoute', 'angular-carousel']);

// Configure routes
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/templates/home.html'
    }).when('/project/:id', {
        controller: 'ProjectDetailsController as projectCtrl',
        templateUrl: 'app/templates/project-details.html'
    }).otherwise({
        redirectTo: '/'
    });
});
angular.module('Portfolio').component('about', {
    templateUrl: 'app/templates/about.html',
    controller: 'AboutController',
    controllerAs: 'aboutCtrl'
});
angular.module('Portfolio').component('carousel', {
    templateUrl: 'app/templates/carousel.html',
    controller: 'CarouselController',
    controllerAs: 'carouselCtrl',
    bindings: {
        images: '='
    }
});
angular.module('Portfolio').component('lightbox', {
    templateUrl: 'app/templates/lightbox.html',
    controller: 'LightBoxController',
    controllerAs: 'lightboxCtrl'
});
angular.module('Portfolio').component('navBar', {
    templateUrl: 'app/templates/navbar.html',
    controller: 'NavigationController',
    controllerAs: 'navCtrl'
});
angular.module('Portfolio').component('projectGrid', {
    templateUrl: 'app/templates/project-grid.html',
    controller: 'ProjectGridController',
    controllerAs: 'gridCtrl'
});
angular.module('Portfolio').component('projectStub', {
    templateUrl: 'app/templates/project-stub.html',
    controller: 'ProjectStubController',
    controllerAs: 'projectStubCtrl',
    bindings: {
        project: '='
    }
});
angular.module('Portfolio').controller('AboutController', ['$http', function ($http) {
    var self = this;
    var skillset = {};

    // Get skillset data
    $http.get('app/skills.json').then(function (response) {
        skillset = response.data;
    });

    this.getLanguages = function () {
        return skillset.languages || [];
    };

    this.getFrameworks = function () {
        return skillset.frameworks || [];
    };

    this.getTools = function () {
        return skillset.tools || [];
    };

    this.getGeneralSkills = function () {
        return skillset.general || [];
    };
}]);
angular.module('Portfolio').controller('CarouselController', ['$rootScope', function ($rootScope) {
    this.showImage = function (imageUrl) {
        $rootScope.$broadcast('imageSelect', imageUrl);
    };
}]);
angular.module('Portfolio').controller('LightBoxController', ['$scope', function ($scope) {
    var self = this;
    this.visible = false;
    this.image = '';

    this.setVisible = function (isVisible) {
        self.visible = isVisible;
    };

    this.setImage = function (imageUrl) {
        self.image = imageUrl;
    };

    // Display image on broadcast
    $scope.$on('imageSelect', function (event, image) {
        self.setImage(image);
        self.setVisible(true);
    });
}]);
angular.module('Portfolio').controller('NavigationController', ['$scope', '$location', function ($scope, $location) {
    var self = this;
    self.path = $location.path();

    // Scroll to element matching given selector
    this.scrollTo = function (selector) {
        var $target = $(selector);
        $('body').animate({ scrollTop: $target.offset().top }, 'slow');
    };

    // Update navbar contents on route change
    $scope.$on('$locationChangeStart', function (next, current) {
        self.path = $location.path();
    });
}]);
angular.module('Portfolio').controller('ProjectDetailsController', ['$routeParams', '$http', function ($routeParams, $http) {
    var self = this;
    var project = {};

    // Get project data
    $http.get('app/projects.json').then(function (response) {
        var projects = response.data;
        for (var i = 0; i < projects.length; i++) {
            if (projects[i].id === $routeParams.id) {
                project = projects[i];
                break;
            }
        }
    });

    this.getProject = function () {
        return project;
    };

    // Scroll to project details
    $('body').animate({ scrollTop: $('#details').offset().top }, 'fast');
}]);
angular.module('Portfolio').controller('ProjectGridController', ['$http', function ($http) {
    var self = this;
    var projects = [];

    // Get project data
    $http.get('app/projects.json').then(function (response) {
        projects = response.data;
    });

    this.getProjects = function () {
        return projects;
    };
}]);
angular.module('Portfolio').controller('ProjectStubController', [function () {}]);
//# sourceMappingURL=bundle.js.map
