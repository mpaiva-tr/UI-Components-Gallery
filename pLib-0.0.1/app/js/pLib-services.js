'use strict';

/* Services */

angular.module('patternCatServices', ['ngResource','ui.bootstrap']).
    factory('pattern', function($resource){
  return $resource('patterns/:patternId.json', {}, {
    query: {method:'GET', params:{patternId:'patterns'}, isArray:true}
  });
});
