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
    .controller('MainController', MainController);

  MainController.$inject = [];


  function MainController() {

    var self = this
    var i = 0,
	degs = 75,
	activeBorder = document.getElementsByClassName('container__data__charts__chart--progression-border'),
	active = document.getElementsByClassName('container__data__charts__chart--progression'),
	borderstyle;

	var launchBorder = function( event ) {
		if (degs >= 50){
			for(i=0; i < degs+1; i++){
				borderStyle = 'background-image: linear-gradient('+ (i*1.8) +'deg, transparent 50%, #A2ECFB 50%),'+
				'linear-gradient(90deg, #A2ECFB 50%, transparent 50%);';
		        //setTimeout(function() {activeBorder[0].setAttribute('style', borderStyle); console.log('in')}, i * 1000);
		        activeBorder[0].setAttribute('style', borderStyle);
			}
		}
	    
	} 

	launchBorder();   
  }


})();