angular.module('Portfolio').component('carousel', {
    templateUrl: 'app/templates/carousel.html',
    controller: 'CarouselController',
    controllerAs: 'carouselCtrl',
    bindings: {
        images: '='
    }
});