(function(){
	

	setBackgroundColor('mySquare', 'red');

	if(document.getElementById('mySquare').style.backgroundColor === "red"){
		window.alert("Success!");
	}
	else{
		window.alert("Failure!");
	}
})();