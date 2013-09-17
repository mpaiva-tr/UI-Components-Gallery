'use strict';

/* Controllers */

myApp.controller('patternListCtrl', function($scope, patternDB) {
  $scope.orderProp = 'age';
	patternDB.get('pattern-list', function(err, doc) {
		$scope.patterns = doc.data;
		$scope.$apply();
	});
});

//patternListCtrl.$inject = ['$scope', 'pattern'];



myApp.controller('patternDetailCtrl', function($scope, $routeParams, patternDB) {
  //pattern.get({patternId: $routeParams.patternId}, function(pattern) {
  	//$scope.pattern = pattern;
console.log("fetch pattern:"+ $routeParams.patternId);
	patternDB.get($routeParams.patternId, function(err, doc) {
		//debugger;
		$scope.pattern = doc.data;
		if (!!doc.data.exmaples) {
			$scope.mainImageUrl = doc.data.exmaples[0].image;
		}
		$scope.$apply();
	});

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
});

//patternDetailCtrl.$inject = ['$scope', '$routeParams', 'pattern'];


