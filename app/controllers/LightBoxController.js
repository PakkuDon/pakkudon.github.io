angular.module('Portfolio').controller('LightBoxController', 
['$scope', function($scope) {
    var self = this;
    this.visible = false;
    this.image = '';

    this.setVisible = function(isVisible) {
        self.visible = isVisible;
    }

    this.setImage = function(imageUrl) {
        self.image = imageUrl;
    }

    // Display image on broadcast
    $scope.$on('imageSelect', function(event, image) {
        self.setImage(image);
        self.setVisible(true);
    });
}]);
