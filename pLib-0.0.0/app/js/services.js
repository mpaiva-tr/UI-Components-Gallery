'use strict';

/* Services */

angular.module('phonecatServices', ['ngResource','ui.bootstrap']).
    factory('Phone', function($resource){
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
});
