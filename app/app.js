;(function() {

  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
      .when("/", {
          templateUrl : "views/home.html",
          controller: 'MainController'
      })
    });
})();