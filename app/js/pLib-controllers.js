'use strict';

/* Controllers */

function patternListCtrl($scope, pattern) {
  $scope.patterns = pattern.query();
  $scope.orderProp = 'age';
}

//patternListCtrl.$inject = ['$scope', 'pattern'];



function patternDetailCtrl($scope, $routeParams, pattern) {
  $scope.pattern = pattern.get({patternId: $routeParams.patternId}, function(pattern) {
    $scope.mainImageUrl = pattern.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//patternDetailCtrl.$inject = ['$scope', '$routeParams', 'pattern'];


