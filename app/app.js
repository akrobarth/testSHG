;(function() {
  /**
   * Definition of the main app module and its dependencies
   */

  angular
    .module('app', ['ngRoute','ngAnimate'])
    .config(function($routeProvider) {
      $routeProvider
      .when("/", {
          templateUrl : "views/home.html",
          controller: 'MainController',
          resolve: {
            resolvedData: function(appService){
              return appService.get();
            }
          }
      })
    })
    .service('appService', function($http){
      return {
        get: function(){
          return $http.get('js/data.js').then(function(response) {
            return response.data;
          });
        }
      };

    })
})();