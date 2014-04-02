'use strict';

angular.module('yoAngularProjectApp')
  .service('Myservice', function Myservice($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log("Inside myservice");
    return $http.get('lib/jsons/first.json');
  });
