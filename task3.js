(function(){

	var mkGrn = document.getElementById('grnBut');
	var grn = document.getElementById('greenBox');

	var mkRed = document.getElementById('redBut');
	var red = document.getElementById('redBox');

	if(mkGrn.addEventListener){
 		mkGrn.addEventListener("click", function() { 
 			grn.style.backgroundColor = 'green';
 		});
    } 

    if(mkRed.addEventListener){
 		mkRed.addEventListener("click", function() { 
 			red.style.backgroundColor = 'red';
 		});
    } 
})();
