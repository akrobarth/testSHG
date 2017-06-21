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
		$scope.users = data;
		$scope.userActiv = 1;
    	
		$scope.openMenu = function () {
			$scope.showMenu = $scope.showMenu ? false : true;
		};
		$scope.changeUser = function (data){
			$scope.userActiv = data;
			$scope.showMenu = false;
		};

    });
})();