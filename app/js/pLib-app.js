'use strict';

/* App Module */

angular.module('pLib', ['patternCatFilters', 'patternCatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/patterns', {templateUrl: 'partials/pattern-list.html',   controller: patternListCtrl}).
      when('/patterns/:patternId', {templateUrl: 'partials/pattern-detail.html', controller: patternDetailCtrl}).
      otherwise({redirectTo: '/patterns'});
}]);
