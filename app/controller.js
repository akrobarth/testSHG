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
    .controller('MainController', function ($scope, resolvedData){

    	var self = this; 

		$scope.showMenu = false;
		$scope.showdata = false;
		$scope.users = resolvedData;
		$scope.userActiv = $scope.users[0];

		$scope.openMenu = function () {
			$scope.showMenu = !$scope.showMenu;
		};
		$scope.changeUser = function (index){
			$scope.userActiv = $scope.users[index];
			$scope.showMenu = false;
			$scope.showdata = false;
			document.getElementById('datas').scrollIntoView({behavior: "smooth"});
		};

		$scope.elementVisible = function (el){

			let top = el.offsetTop;
			let height = el.offsetHeight;
			let bottom = top + height;
			let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
			let IsBeforeTop = bottom < window.pageYOffset;

			if (!IsOverBottom && !IsBeforeTop) {
				$scope.showdata = true;
			}else{
				$scope.showdata = false;
			}
			$scope.$apply();
		}

		$scope.onScroll = function (){
		  for (var item of document.querySelectorAll(".container__data__charts__chart")) {
		    	$scope.elementVisible(item);
		  }
		}

		window.addEventListener("scroll", $scope.onScroll);

    });
})();