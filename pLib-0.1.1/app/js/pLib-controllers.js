/*jslint node: true */
'use strict';

/* Controllers */

function patternListCtrl($scope, pattern) {
    $scope.patterns = pattern.query();
    $scope.orderProp = 'age';
}

//patternListCtrl.$inject = ['$scope', 'pattern'];



function patternDetailCtrl($scope, $routeParams, pattern) {
    pattern.get({
        patternId: $routeParams.patternId
    }, function (pattern) {
        $scope.pattern = pattern;
        $scope.mainImageUrl = pattern.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };

    $scope.$watch("pattern.tagsText", function (newVal, oldval) {
        $scope.pattern.tags = newVal.split(",");
    });
}

//patternDetailCtrl.$inject = ['$scope', '$routeParams', 'pattern'];



function patternEditCtrl($scope, $routeParams, pattern) {
    pattern.get({
        patternId: $routeParams.patternId
    }, function (pattern) {
        $scope.pattern = pattern;
        $scope.pattern.tags = pattern.tagsText.split(",");
        $scope.mainImageUrl = pattern.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };

    $scope.$watch("pattern.tagsText", function (newVal, oldval) {
        $scope.pattern.tags = newVal.split(",");
    });

}

//patternDetailCtrl.$inject = ['$scope', '$routeParams', 'pattern'];
