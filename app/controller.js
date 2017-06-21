/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('app')
    .controller('MainController', function ($scope){
		$scope.showMenu = false;

    	
		$scope.openMenu =function () {
			$scope.showMenu = $scope.showMenu ? false : true;
		};


    });
})();