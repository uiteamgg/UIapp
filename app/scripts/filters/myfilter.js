'use strict';

angular.module('yoAngularProjectApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
