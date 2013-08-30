'use strict';

/* Filters */

angular.module('patternCatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
