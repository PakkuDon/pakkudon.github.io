angular.module('Portfolio').controller('NavigationController', 
['$scope', '$location', function($scope, $location) {
    var self = this;
    self.path = $location.path();
    
    // Scroll to element matching given selector
    this.scrollTo = function(selector) {
        var $target = $(selector);
        $('body').animate({ scrollTop: $target.offset().top }, 'slow');
    }

    // Update navbar contents on route change
    $scope.$on('$locationChangeStart', function(next, current) {
        self.path = $location.path();
    });
}]);