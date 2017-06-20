'use strict';

var i = 0,
	degs = 67,
	activeBorder = document.getElementsByClassName('container__data__charts__chart--progression-border'),
	active = document.getElementsByClassName('container__data__charts__chart--progression');

// setTimeout(function(){
//     if(active.is(":hover"))
//        loopit("c");
//     else
//        loopit("nc");
// },1);

active[0].addEventListener("mouseover", function( event ) {
	console.log('in');
});

function loopit(dir){
    if (dir == "c")
        i++
    else
        i--;
    if (i < 0)
        i = 0;
    if (i > degs)
        i = degs;
    prec = (100*i)/360;   
    //$(".prec").html(Math.round(prec)+"%");
    
    if (i<=180){
        activeBorder.css('background-image','linear-gradient(' + (90+i) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }
    else{
        activeBorder.css('background-image','linear-gradient(' + (i-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }
    
    // setTimeout(function(){
    //     if($("#circle").is(":hover"))
    //         loopit("c");
    //     else
    //        loopit("nc");
    // },1);
}