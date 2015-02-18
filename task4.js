(function(){

		var count = 0;
    
		document.getElementById('btnCol').addEventListener("click", function(){

			count++;

			if (count % 2 === 0){
				document.getElementById('green').style.display = "none";
				document.getElementById('red').style.display = "block";
				document.getElementById('btnCol').innerHTML = "Change Green";
			}
			else{
				document.getElementById('red').style.display = "none";
				document.getElementById('green').style.display = "block";
				document.getElementById('btnCol').innerHTML = "Change Red";
			}



	});

	
})();
