var commentApp = angular.module('commentApp', ['ngRoute','commentControllers']);

commentApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/comments.html',
        controller: 'commentCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);


