'use strict';

myApp.factory('patternDB', [function() {

//  var mydb = new Pouch('pattern-pouch');
//  Pouch.replicate('pattern-pouch', 'http://127.0.0.1:5984/ng-db-patterns', {continuous: true});
//  Pouch.replicate('http://127.0.0.1:5984/ng-db-patterns', 'pattern-pouch', {continuous: true});
//  return mydb;

  var mydb = new PouchDB('http://127.0.0.1:5984/ng-db-patterns');
  return mydb;

}]);
