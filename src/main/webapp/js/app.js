var todoApp = angular.module('mayahomeApp', [
  'ngRoute',
  'ui.bootstrap'
]);

todoApp
    .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DevicesListCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);