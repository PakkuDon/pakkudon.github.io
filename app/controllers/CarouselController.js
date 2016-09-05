angular.module('Portfolio').controller('CarouselController', 
['$rootScope', function($rootScope) {
    this.showImage = function(imageUrl) {
        $rootScope.$broadcast('imageSelect', imageUrl);
    }
}]);